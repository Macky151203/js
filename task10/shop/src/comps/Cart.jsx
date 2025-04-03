import React, { useEffect, useState } from "react";

function Cart() {
  const [usercart, setusercart] = useState([]);
  const [total,settotal]=useState('')
  let cartdata
  useEffect(() => {
    cartdata = JSON.parse(localStorage.getItem("cart"));
    if (cartdata) {
      setusercart(cartdata);
    }
    calculatetotal()
  }, []);

  const removefromcart=(id)=>{
    const tempdata=usercart.filter((item)=>item.id!==id)
    cartdata=tempdata
    setusercart(tempdata)
    localStorage.setItem('cart',JSON.stringify(tempdata))
    calculatetotal()
  }

  const calculatetotal = () => {
    const temptotal=cartdata.reduce((total, item) => total + item.price, 0);
    console.log(temptotal)
    settotal(temptotal)
   
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full p-2">
        <div className="grid  md:w-3/5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {usercart.length!=0 ?
            usercart.map((item, i) => {
              return (
                <div className="p-4 bg-blue-100 flex flex-col rounded cursor-pointer" key={i}>
                  <div className="flex-grow"><div>{item.desc}</div>
                  <div>{item.price}</div>
                  <div>{item.category.join(", ")}</div></div>
                  <button
                    onClick={()=>{removefromcart(item.id)}}
                    className="p-1 my-1 px-1 bg-red-400 text-white rounded-md cursor-pointer"
                  >
                    Remove 
                  </button>
                </div>
              );
            }):<div>Cart is empty</div>}
        </div>
        <div className="w-2/5 ">
          <div>Total- {total}</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

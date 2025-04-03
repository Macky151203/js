import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { seeddata } from "../data/data";

function Product() {
  const { id } = useParams();
  const productdataarr = seeddata.filter((item) => item.id === id);
  const productdata = productdataarr[0];

  const addtocart = () => {
    const cartdata=JSON.parse(localStorage.getItem('cart'))
    let newcartdata
    if(cartdata){
      newcartdata=[...cartdata,productdata]
    }
    else{
      newcartdata=[productdata]
    }
    localStorage.setItem('cart',JSON.stringify(newcartdata))
    alert("Added to cart")
  };


  return (
    <div className="p-4">
      <div>
        <div>Name- {productdata.name}</div>
        <div>Price- {productdata.price}</div>
        <div>Description- {productdata.desc}</div>
        <div>Reviews- {productdata.reviews}</div>
        <div>
          <button
            onClick={addtocart}
            className="p-1 my-1 px-1 bg-blue-400 text-white rounded-md cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

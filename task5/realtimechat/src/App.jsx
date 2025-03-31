import React, { useState,useRef,useEffect } from "react";

function App() {

  const [text,settext]=useState('')
  const [chat,setchat]=useState([])
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const handlesubmit= (e)=>{
    e.preventDefault()
    const newobj={role:'user',msg:text,time:new Date().toLocaleTimeString()}
    let tempobj
    if(chat){
      tempobj=[...chat,newobj]
    }
    else{
      tempobj=[newobj]
    }
    setchat(tempobj)
    settext('')
    let generated_response
    console.log("before set")
    console.log(tempobj)
    setTimeout(() => {
      generated_response="constant response than man."
      const resp_obj={role:"ai",msg:generated_response,time:new Date().toLocaleTimeString()}
      const temp=[...tempobj,resp_obj]
      console.log(temp)
      setchat(temp)
    }, 1000);
  }

  return (
    <div className="bg-slate-800 text-white min-h-screen relative">
      <div className="text-center text-xl shadow-md py-4 p-1">Realtimechat</div>
      <div className="overflow-y-scroll  h-[calc(100vh-120px)]">
        <div className="flex flex-col gap-4 px-4 mt-4"> 
          {chat && chat.map((item,i)=>{
            return(
              <div className={`flex ${item.role=='ai'?'justify-start':'justify-end'}`} key={i}>
                <div className={`${item.role=='ai'?'text-left rounded-r-lg':'text-right rounded-l-lg'} bg-slate-600 p-1 max-w-1/2`}><span className="font-semibold text-lg px-1">{item.role}</span>:<span className="text-lg">{item.msg} </span><span className="text-slate-400 text-sm">{item.time}</span></div>
              </div>
            )
          })}
          <div ref={endOfMessagesRef} />
        </div>
      </div>
      <form className="absolute flex  justify-center gap-2 bottom-0 left-0 right-0 md:p-4 p-1" onSubmit={handlesubmit}>
        <input required className="bg-slate-200 md:w-1/2 text-black rounded-md p-1" type="text" placeholder="enter text here..." value={text} onChange={(e)=>settext(e.target.value)} />
        <button className="bg-blue-500 p-1 rounded-md cursor-pointer" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

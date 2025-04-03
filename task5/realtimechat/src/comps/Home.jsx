import React from 'react'
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Home() {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");
  const navigate=useNavigate()

  const handlejoin=()=>{
    navigate(`/chat/${room}?name=${name}`)
  }
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-1/2 h-1/2 flex flex-col gap-2 items-center">
        <div>
          <input className="p-1 bg-gray-200 rounded-md" type="text" placeholder="enter name" value={name} onChange={(e)=>setname(e.target.value)} />
        </div>
        <div>
          <input className="p-1 bg-gray-200 rounded-md" type="text" placeholder="enter room" value={room} onChange={(e)=>setroom(e.target.value)} />
        </div>
        <button className="p-1 cursor-pointer px-2 rounded-md bg-blue-500 text-white" onClick={handlejoin}>Join</button>
      </div>
    </div>
    </div>
  )
}

export default Home

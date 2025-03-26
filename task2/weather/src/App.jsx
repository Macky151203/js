import React from 'react'
import {useState} from 'react'

function App() {

  const [city,setcity]=useState('')
  const [data,setdata]=useState(null)


  const getdetails = async(e) =>{
    e.preventDefault()
    const response=await fetch(`http://localhost:4000/api/?city=${city}`)
    const tempdata=await response.json()
    console.log(tempdata.weather)
    setdata(tempdata.weather)
    setcity('')
  }

  return (
    <div className='max-w-screen overflow-x-hidden flex justify-center flex-col items-center gap-4'>
      <div className='text-center text-xl'>
          Weather Station
      </div>
      <form className='flex flex-col gap-4' onSubmit={getdetails}>
        <input className='rounded-md bg-slate-300 px-2 p-1' value={city} type='text' placeholder='Enter city' onChange={(e)=>{setcity(e.target.value)}} required  />
        <button className='bg-blue-300 rounded-md p-1 cursor-pointer' type='submit'>Get Weather</button>
      </form>
      <div>
        {data && <>
          <div>Temp- {data.main.temp} F</div>
          <div>Humidity- {data.main.humidity} %</div>
        </>}
      </div>
    </div>
  )
}

export default App

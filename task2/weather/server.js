import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config()
const app=express()
app.use(cors())

app.get('/api',async(req,res)=>{
  const city=req.query.city
  console.log(city)
  const weatherinfo=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
  // console.log(await weatherinfo.json())
  const weatherdata=await weatherinfo.json()
  return res.json({weather:weatherdata})
})

app.listen(4000)
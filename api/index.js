import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from './routes/auth.js'
const app = express()
dotenv.config()

const connect = async ()=>{

  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
}

mongoose.connection.on("disconnected", ()=>{
  console.log("MongoDB disconnected!");
})

//Middlewares

app.use("/", authRoute);

app.listen(3000, ()=>{
  connect()
  console.log("Connected to backend.")
})

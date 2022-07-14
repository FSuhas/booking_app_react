import express from "express"

const router = express.Router();

router.get("/", (req,res)=>{
  res.send("Yo auth")
})

router.get("/register", (req,res)=>{
  res.send("Yo register")
})

export default router

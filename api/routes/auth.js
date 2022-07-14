import express from "express"

const router = express.Router();

router.get("/", (req,res)=>{
  res.send("Yo home")
})

router.get("/auth", (req,res)=>{
  res.send("Yo auth")
})

router.get("/auth/register", (req,res)=>{
  res.send("Yo register")
})

export default router

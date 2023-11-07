const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const routes=require("./routes/TodoRoute")

const dotenv=require("dotenv").config()

const app=express()
const PORT=process.env.PORT|| 5000



mongoose.connect(process.env.DB_CONNECT)
.then(()=>{
    console.log("database connected");
})
.catch((err)=>{
    console.log({message:err.message})
})

app.use(express.json())
app.use(cors())
app.use(routes)
app.listen(process.env.PORT,()=>{
    console.log("connectd to server");
})

const mongoose=require("mongoose")

const todoModelSchema= mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("todo",todoModelSchema)
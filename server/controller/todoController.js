const TodoModel=require("../model/todoModel")

module.exports.getTodo=async(req,res)=>{
    const todo=await TodoModel.find()
    res.send(todo);
}

module.exports.saveTodo=async(req,res)=>{
    const {text}=req.body;
    const todo=await TodoModel.create({text}).then(()=>{
        res.send("item added")
    }).catch((err)=>{
        res.send({message:err.message})
    })

}
module.exports.UpdateTodo=async(req,res)=>{
    const {_id,text}=req.body;
    const updateText= await TodoModel.findByIdAndUpdate(_id,{text})
    .then(()=>{
        res.send("update succesfully")
    }).catch((err)=>{
        res.send({message:err.message})
    })


}
module.exports.DeleteTodo=async(req,res)=>{
    const {_id}=req.body;
    const updateText= await TodoModel.findByIdAndDelete(_id)
    .then(()=>{
        res.send("Deleted succesfully")
    }).catch((err)=>{
        res.send({message:err.message})
    })


}

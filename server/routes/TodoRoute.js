const { getTodo, saveTodo, UpdateTodo, DeleteTodo } = require("../controller/todoController");

const router=require("express").Router()

router.get("/",getTodo);
router.post("/save",saveTodo)
router.post("/update",UpdateTodo)
router.post("/delete",DeleteTodo)


module.exports=router;
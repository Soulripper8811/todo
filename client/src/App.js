import React, { useEffect } from 'react'
import Todo from './components/Todo'
import { useState } from 'react';
import { getAllTodo,addTodo,updateTodo, deleteTodo } from './utils/HandleApi';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [todoId, setTodoId] = useState("");
  const[isUpdating,setIsUpdating]=useState(false);

  useEffect(()=>{
    getAllTodo(setTodo)
  },[])
  const updateMode=(_id,text)=>{
    setIsUpdating(true);
    setText(text)
    setTodoId(_id)

  }
  return (
    <div className='App'>
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input onChange={(e)=>setText(e.target.value)} value={text} type="text" placeholder='Add your todo here......' />
          <div className="add" onClick={isUpdating?()=>updateTodo(todoId,text,setTodo,setText,setIsUpdating):()=>addTodo(text,setText,setTodo)}>{isUpdating?"update":"Add"}</div>
        </div>
        <div className="list">
          {
            todo.map((item)=>(
              <Todo key={item._id} text={item.text} updateMode={()=>updateMode(item._id,item.text)} deleteTodo={()=>deleteTodo(item._id,setTodo)}/>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
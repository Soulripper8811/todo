import axios from "axios"

const baseUrl="http://localhost:5000"

const getAllTodo=(setTodo)=>{
    axios.get(baseUrl).then(({data})=>{
        setTodo(data);
        console.log(data);
    })
    .catch(err=>{
        console.log({message:err.message});
    })
}

const addTodo=(text,setText,setTodo)=>{
    axios.post(`${baseUrl}/save`,{text})
    .then(({data})=>{
        console.log(data)
        setText("")
        getAllTodo(setTodo)
    })

}
const updateTodo=(todoId,text,setTodo,setText,setIsUpdating)=>{
    axios.post(`${baseUrl}/update`,{_id:todoId,text})
    .then(({data})=>{
        setText("");
        setIsUpdating(false);
        getAllTodo(setTodo);
    })

}
const deleteTodo=(todoId,setTodo)=>{
    axios.post(`${baseUrl}/delete`,{_id:todoId})
    .then(({data})=>{
        getAllTodo(setTodo);
    })

}


export {getAllTodo,addTodo,updateTodo,deleteTodo} 
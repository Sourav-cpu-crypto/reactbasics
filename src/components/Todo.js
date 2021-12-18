import React,{useState} from 'react'
import TodoForm from'./TodoForm';
function Todo() {
    const [edit,setEdit]=useState({
        id:null,
        value:''
    })
    return todos.map((todo,index)=>{
        <div className={todo.iscomplete ? 'todo-row-complete':'todo-row'} key={index}>
            <div key={todo.id} onclick={()=>completeTodo(todo.id)}>
                </div>
                <div classname="icons">

                    </div>
        </div>
    })
}
export default Todo

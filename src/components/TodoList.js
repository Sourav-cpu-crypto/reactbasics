import React,{useState} from 'react';
import TodoForm from './TodoForm';


function TodoList() {
    const [todos,setTodos]=useState([]);
    const addTodo = todo =>{
    if(!todo.Text || /^\s*$/.test(todo.Text))
    {
return
    }
    const newTodos = [todo,...todos]
    setTodos(newTodos);
    console.log(todo,...todos);
};
    return (
        <div>
            <h1>iii</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
    )
}

export default TodoList

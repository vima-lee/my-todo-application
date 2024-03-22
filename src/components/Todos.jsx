import React from 'react';
import DoubleTodo from './DoubleTodo';
import './todos.css';
const Todos = ({todos,setTodos, handleChange, setTask, task}) => {

    const handleDelete = (task) => {
        setTodos(todos.filter((val) => val.task !== task));
    }
    
    return (
        <div className='todos'>
            {todos.map((todo,index) => <DoubleTodo tasks={todo.task} key={index} handleDelete={handleDelete} handleChange={handleChange} todos={todos} setTodos={setTodos} setTask={setTask} value={task}/>)}
        </div>
    )
}

export default Todos
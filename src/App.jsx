import { useState } from 'react'
import data from './data';
import Todos from './components/Todos';
import './App.css'

function App() {
  const [task,setTask] = useState('');
  const [todos,setTodos] = useState(data);

  const found = todos.some((todo) => todo.task === task);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  }
  const handleClick = () => {
    if(!found)
    setTodos((prev) => [...prev,{task:task}]);
    setTask('');
  }
  console.log(todos);
  return (
    <div className="container">
     <h2 className='header'>Add your Tasks here</h2>
     <div className='inp-holder'>
      <input type="text" placeholder='Add Tasks' value={task} className='inp' onChange={handleChange} />
      <button className="btn" onClick={handleClick}>+</button>
     </div>
     <Todos todos={todos} setTodos={setTodos} handleChange={handleChange} task={task} setTask={setTask}/>
    </div>
  )
}

export default App

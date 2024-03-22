import React , {useState} from 'react'
import './singleTodo.css';
import { FaCheck , FaTrash , FaEdit} from 'react-icons/fa';
const DoubleTodo = ({tasks , handleDelete,setTodos,todos,handleChange,value, setTask}) => {
    const [isDone, setIsdone] = useState(false);
    const [isEdit, setIsedit] = useState(false);
    const handleCheck = (e) => {
        setIsdone(true);
    }
    const handleEdit = () => {
        setIsedit(true);
    }
    //console.log(todos);
    const handleClick = (task) => {
        setIsedit(false);
        if(value !== null){
            setTodos(todos.map((tod)=> {
                if(tod.task === task){
                    tod.task = value;
                }
                console.log(tod.task);
                return tod;
            }));
        }
        setTask('')
    }
    return (
        <div className='single'>
            {isDone === true ? <s className='todo-name'><b>{tasks}</b></s>: isEdit === true ? <div><input type="text" defaultValue={tasks} className='inp' onChange={(e) => {handleChange(e)}}/><button className='btn1' onClick={() => handleClick(tasks)} >Edit</button></div> : <h4 className='todo-name'>{tasks}</h4>}
            <div className='icons'>
                <FaCheck className='icon' onClick={handleCheck} />
                <FaEdit className='icon' onClick={handleEdit}/>
                <FaTrash className='icon' onClick={() => handleDelete(tasks)} />
            </div>
        </div>
    )
}

export default DoubleTodo
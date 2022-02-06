import "./style.css"
import { useState} from "react"
import { useDispatch } from "react-redux"
import * as actions from "../../actions/taskActions"

const Task = ({name, completed}) => {
    const dispatch = useDispatch()

    const [checked, setChecked] = useState(completed)
    
    const handleDeleteClick = () => {
        dispatch(actions.removeTask(name)) // prob change name to id;
    }
    
    const handleChange = e => {
        setChecked(!checked)
        let task = {
            content: name,
            completed: e.target.checked
        }
        dispatch(actions.updateTask(task))  
    }
    
    return (
        <div className={completed ? "card completed": "card"}>
            <input type="checkbox" onChange={handleChange} checked={checked}/>
            <div className="break-word" >{name}</div>
            <i className="fas fa-times disabled" onClick={handleDeleteClick}></i>
        </div>
    )
}

export default Task
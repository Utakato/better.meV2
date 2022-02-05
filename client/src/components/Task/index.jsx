import "./style.css"
import { useState} from "react"
import { useDispatch } from "react-redux"
import * as actions from "../../actions/taskActions"

const Task = ({name, completed}) => {
    const dispatch = useDispatch()
    
    const [isShown, setIsShown] = useState(false)
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
        <div className={completed ? "card completed": "card"}
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}
             >
            <input type="checkbox" onChange={handleChange} checked={checked}/>
            <div className="break-word" >{name}</div>
            {isShown ? <i className="fas fa-times" onClick={handleDeleteClick}></i> : null}
        </div>
    )
}

export default Task
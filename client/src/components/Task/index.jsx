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
            //  onMouseEnter={() => setIsShown(true)}
            //  onMouseLeave={() => setIsShown(false)}
            //  onTouchStart={() => setIsShown(true)}
            //  onTouchCancel={() => setIsShown(false)}
             >
            <input type="checkbox" onChange={handleChange} checked={checked}/>
            <div className="break-word" >{name}</div>
            {/* {isShown ? 
             : null} */}
            <i className="fas fa-times disabled" onClick={handleDeleteClick}></i>
        </div>
    )
}

export default Task
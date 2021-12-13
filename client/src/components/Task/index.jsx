import "./style.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import * as actions from "../../actions/taskActions"
const Task = ({name, completed}) => {
    const [isShown, setIsShown] = useState(false)
    const dispatch = useDispatch()

    const handleDeleteClick = () => {
        dispatch(actions.removeTask(name)) // prob change name to id;
    }
    const handleChange = e => {
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
            <input type="checkbox" onChange={handleChange}/>
            <div>{name}</div>
            {isShown ? <i class="fas fa-times" onClick={handleDeleteClick}></i> : null}
        </div>
    )
}

export default Task
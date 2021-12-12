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
    
    return (
        <div className="card"
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}
             >
            <input type="checkbox" />
            <div>{name}</div>
            {isShown ? <i class="fas fa-times" onClick={handleDeleteClick}></i> : null}
        </div>
    )
}

export default Task

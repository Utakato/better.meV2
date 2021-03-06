import "./style.css"
import { useSelector, useDispatch } from "react-redux"
import * as actions from "../../actions/taskActions"
const Options = () => {
    const dispatch = useDispatch()
    
    const taskStore = useSelector(state => state.task)
    const tasksActive = taskStore.filter(task => !task.completed)
    const tasksCompleted = taskStore.filter(task => task.completed && task )
    
    const handleClear = () => {
        dispatch(actions.removeTasks(tasksCompleted))
    }
    return (
        <div className="options">
            <div>{tasksActive.length} items left</div>
            <div className ="clickable" onClick={handleClear}>Clear Completed</div>
        </div>
    )
}

export default Options

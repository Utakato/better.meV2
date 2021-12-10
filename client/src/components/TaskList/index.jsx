import Options from "../Options"
import SortOptions from "../SortOptions"
import Task from "../Task"
import "./style.css"
import { useSelector } from "react-redux"

const TaskList = () => {
    const taskList = useSelector(state => state.task)
    return (
        <div className="task-list">
            {taskList.map(task => {
                return <Task name={task.content} completed={task.completed}/>
            })
            }
            <Options />
            <SortOptions />
        </div>
        
    )
}

export default TaskList

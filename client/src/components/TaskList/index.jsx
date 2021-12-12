import Options from "../Options"
import SortOptions from "../SortOptions"
import Task from "../Task"
import "./style.css"
import { useSelector } from "react-redux"

const TaskList = () => {
    const taskList = useSelector(state => state.task)
    const order = useSelector(state => state.order)
    return (
        <div className="task-list">
            {taskList.map(task => {
                switch (order) {
                    case "all":
                        return <Task name={task.content} completed={task.completed} key={task.content}/>                        
                    case "active": 
                        return !task.completed && <Task name={task.content} completed={task.completed}/>
                    case "completed": 
                        return task.completed && <Task name={task.content} completed={task.completed}/>                
                    
                    default:
                        break;
                }
            })
            }
            <Options />
            <SortOptions />
        </div>
        
    )
}

export default TaskList

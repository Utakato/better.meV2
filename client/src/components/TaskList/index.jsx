import Task from "../Task"
import "./style.css"

const TaskList = () => {
    return (
        <div className="task-list">
            <Task name="test" completed={false}/>
            <Task name="test" completed={false}/>
            <Task name="test" completed={false}/>
            <Task name="test" completed={false}/>
        </div>
    )
}

export default TaskList

import "./style.css"
const TaskInput = () => {
    return (
        <div className="wrapper">
            <div className="task-input">
                <input type="checkbox"></input>
                <input type="text" placeholder="Create a new task.." />
            </div>
        </div>
    )
}
    
export default TaskInput
    
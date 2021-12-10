import "./style.css"
const Task = ({name, completed}) => {
    return (
        <div className="card">
            <input type="checkbox" />
            <div>{name}</div>
            <i class="fas fa-times"></i>
        </div>
    )
}

export default Task

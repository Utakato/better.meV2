import "./style.css"
import { useSelector } from "react-redux"
const Options = () => {
    const taskStore = useSelector(state => state.task)
    const itemsLeft = taskStore.length
    return (
        <div className="options">
            <div>{itemsLeft} items left</div>
            <div>Clear Completed</div>
        </div>
    )
}

export default Options

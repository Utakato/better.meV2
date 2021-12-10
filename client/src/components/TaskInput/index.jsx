import "./style.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import * as actions from "../../actions/taskActions"

const TaskInput = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const task = {
		content: text,
		completed: false,
	}
    const handleEnter = e => {
		if (e.keyCode === 13 && text !== '') {
			dispatch(actions.addTask(task))
			setText('')
		}
	}

    const handleChange = e => setText(e.target.value)
    return (
        
        <div className="wrapper">
            <div className="task-input">
                <input type="checkbox"></input>
                <input type="text" onChange={handleChange} onKeyDown={handleEnter}placeholder="Create a new task.." />
            </div>
        </div>
    )
}
    
export default TaskInput
    
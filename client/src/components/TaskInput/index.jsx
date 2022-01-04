import "./style.css"
import { useDispatch } from "react-redux"
import { useState } from "react"
import * as actions from "../../actions/taskActions"

const TaskInput = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [checked, setChecked] = useState(false)

    const task = {
		content: text,
		completed: false,
	}
    const handleEnter = e => {
		if (e.keyCode === 13 && text !== '') {
            setChecked(true)
			dispatch(actions.addTask(task))
			setText('')
            setTimeout(() => {setChecked(false)}, 150)
		}
	}
    const handleCheck = (e) => {
        if (text) {
            setChecked(true)
        }
        if (e.target.checked && text){
            dispatch(actions.addTask(task))
            setText('')
            setTimeout(() => {setChecked(false)}, 150)
        }

        
    }

    const handleChange = e => setText(e.target.value)
    return (
        
        <div className="wrapper">
            <div className="task-input">
                <input type="checkbox" onChange={handleCheck} checked={checked}></input>
                <input type="text" value={text} onChange={handleChange} onKeyDown={handleEnter} placeholder="Create a new task.." />
            </div>
        </div>
    )
}
    
export default TaskInput
    
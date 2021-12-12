import "./style.css"
import { useState } from "react"
const Task = ({name, completed}) => {
    const [isShown, setIsShown] = useState(false) 
    
    return (
        <div className="card"
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}
             >
            <input type="checkbox" />
            <div>{name}</div>
            {isShown ? <i class="fas fa-times"></i> : null}
        </div>
    )
}

export default Task

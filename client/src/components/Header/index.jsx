import "./style.css"
import TaskInput from "../TaskInput"

const Header = () => {
    return (
        <section className="header">
            <div className="split">
                <h1>TODO</h1>
                <i></i>
            </div>
            <TaskInput />
        </section>
    )
}

export default Header

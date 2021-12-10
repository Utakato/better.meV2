import "./style.css"
import TaskInput from "../TaskInput"
import DarkButton from "../DarkButton"

const Header = () => {
    return (
        <section className="header">
            <div className="split">
                <h1>TODO</h1>
                <DarkButton/>
            </div>
            <TaskInput />
        </section>
    )
}

export default Header

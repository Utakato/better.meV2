import "./style.css"
import {useSelector, useDispatch} from "react-redux"
import * as darkModeAction from "../../actions/darkMode"
const DarkButton = () => {
    let dispatch = useDispatch()
    let darkModeState = useSelector(state => state.darkMode)

    let handleClick = () => {
        dispatch(darkModeAction.updateDarkMode(!darkModeState))
    }
    return (
        <div className="dark-mode" onClick={handleClick}>
            {darkModeState ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </div>
    )
}

export default DarkButton
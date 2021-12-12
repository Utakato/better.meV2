import "./style.css"
import { useDispatch } from "react-redux"
import * as actions from "../../actions/orderActions"
const SortOptions = () => {
    const dispatch = useDispatch()
    const handleClick = e => {
        const sortValue = e.target.id
        dispatch(actions.updateOrder(sortValue))
    }
    return (
        <div className="sort-options">
            <div className="sort-card">
                <div className="sort" id="all" onClick={handleClick}>All</div>
                <div className="sort" id="active" onClick={handleClick}>Active</div>
                <div className="sort" id="completed" onClick={handleClick}>Completed</div>
            </div>
        </div>
    )
}

export default SortOptions

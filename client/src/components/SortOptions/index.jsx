import "./style.css"
import { useDispatch,useSelector } from "react-redux"
import * as actions from "../../actions/orderActions"
const SortOptions = () => {
    const dispatch = useDispatch()
    const sortState = useSelector(state => state.order) 
    const handleClick = e => {
        const sortValue = e.target.id
        dispatch(actions.updateOrder(sortValue))
    }
    return (
        <div className="sort-options">
            <div className="sort-card">
                <div className={sortState == "all" ? "sort selected" : "sort"} id="all" onClick={handleClick}>All</div>
                <div className={sortState == "active" ? "sort selected" : "sort"} id="active" onClick={handleClick}>Active</div>
                <div className={sortState == "completed" ? "sort selected" : "sort"} id="completed" onClick={handleClick}>Completed</div>
            </div>
        </div>
    )
}

export default SortOptions

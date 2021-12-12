import {combineReducers} from "redux"
import taskReducer from "../features/task"
import darkModeReducer from "../features/darkmode"
import orderReducer from "../features/order"
const rootReducer = combineReducers({
    order: orderReducer,
    task: taskReducer,
    darkMode: darkModeReducer,
})

export default rootReducer
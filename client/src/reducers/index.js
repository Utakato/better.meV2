import {combineReducers} from "redux"
import taskReducer from "../features/task"
import darkModeReducer from "../features/darkmode"
const rootReducer = combineReducers({
    task: taskReducer,
    darkMode: darkModeReducer,
})

export default rootReducer
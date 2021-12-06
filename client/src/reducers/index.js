import {combineReducers} from "redux"
import taskReducer from "../features/task"

const rootReducer = combineReducers({
    task: taskReducer,
})

export default rootReducer
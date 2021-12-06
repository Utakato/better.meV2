const taskReducer = (state=[], action) => {
    switch(action.type) {
        case "fetchTasks": {
            return action.payload
        }

        default : return state
    }

}

export default taskReducer
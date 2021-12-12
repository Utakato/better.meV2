export const addTask = (task) => (dispatch) => {
    try {
        dispatch({
            type:"addTask",
            payload: task
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const removeTask = (name) => (dispatch) => { // prob change name to id;
    try {
        dispatch({
            type:"removeTask",
            payload: name
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const removeTasks = (taskList) => (dispatch) => { // prob change name to id;
    try {
        dispatch({
            type:"removeTasks",
            payload: taskList
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateTask = (task) => (dispatch) => { // prob change name to id;
    try {
        dispatch({
            type:"updateTask",
            payload: task
        })
    } catch (error) {
        console.log(error.message)
    }
}
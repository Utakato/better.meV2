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
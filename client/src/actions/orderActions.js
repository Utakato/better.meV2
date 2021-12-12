export const updateOrder = (value) => (dispatch) => {
    try {
        dispatch({
            type:"updateOrder",
            payload: value
        })
    } catch(error) {
        console.log(error.message)
    }
}
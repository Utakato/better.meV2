export const updateDarkMode = (bool) => (dispatch) => {
    try {
        dispatch({
            type:"updateDarkMode",
            payload: bool
        })
    } catch(error) {
        console.log(error.message)
    }
}
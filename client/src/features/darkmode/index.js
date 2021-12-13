const darkModeReducer = (state=true, action) => {
    switch(action.type) {
        case "updateDarkMode": {
            return action.payload
        }

        default : return state
    }

}

export default darkModeReducer

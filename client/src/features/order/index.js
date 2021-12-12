const orderReducer = (state="all", action) => {
    switch(action.type) {
        case "updateOrder": {
            return action.payload
        }

        default : return state
    }

}

export default orderReducer
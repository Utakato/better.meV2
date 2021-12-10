const defTaskState = [
    {
    content: "Test1",
    completed: false,
},
{
    content: "Test2",
    completed: false,
},
{
    content: "Test3",
    completed: false,
}
]

const taskReducer = (state=defTaskState, action) => {
    switch(action.type) {
        case "addTask": {
            return [...state, action.payload ]	
        }

        default : return state
    }

}

export default taskReducer
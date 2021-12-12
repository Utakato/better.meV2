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

        case "removeTask": {
            return state.filter(task => task.content !== action.payload)

        }

        case "removeTasks": {
            return state.filter(task => !action.payload.includes(task))
        }
        
        case "updateTask": {
            return state.map(task => {
                if (task.content !== action.payload.content){
                    return task
                }
                return {...task,
                    content: action.payload.content, 
                    completed: action.payload.completed
                }
            })
        }

        default : return state
    }

}

export default taskReducer
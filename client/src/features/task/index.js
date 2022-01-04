const defTaskState = [
    {
        content: "To create new Task, write it above and check it/press enter",
        completed: false,
    },
    {
        content: "Check to mark completed",
        completed: false,
    },
    {
        content: "Press X to clear task",
        completed: false,
    },
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
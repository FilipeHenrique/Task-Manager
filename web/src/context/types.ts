export interface Task  {
    id: number,
    text: string,
}

export type State = {
    tasks: Task[]
}

export type Actions = {
    addTask: (task: Task) => void,
    editTask: (taskId: number, tasktext: string ) => void,
    deleteTask: (taskId: number) => void
}

export type TasksContextType = [State,Actions]


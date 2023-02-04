export interface Task  {
    id: number,
    title: string,
}

export type State = {
    tasks: Task[]
}

export type Actions = {
    addTask: (task: Task) => void,
    editTask: (taskId: number, taskTitle: string ) => void,
    deleteTask: (taskId: number) => void
}

export type TasksContextType = [State,Actions]


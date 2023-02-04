export interface Task  {
    id: number,
    title: string,
}

export type State = {
    tasks: Task[]
}

export type Actions = {
    addTask: (task: Task) => void
}

export type TasksContextType = [State,Actions]


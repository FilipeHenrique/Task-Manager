import { createContext, ReactNode, useEffect, useState } from "react"
import { Actions, State, Task, TasksContextType } from './types'

const TasksContext = createContext<TasksContextType | null>(null);

const data = [
    {
        id: 0,
        title: 'Fazer almoço',
    },
    {
        id: 1,
        title: 'Lavar roupas',
    }
]

export const TasksProvider = ({ children }: {children: ReactNode}) => {

    const [tasks, setTasks] = useState<Task[]>(data);

    const addTask = (newTask: Task) => {
        const oldTasks = [...tasks];
        setTasks([...oldTasks, newTask]);
        // api call
            // se der errado 
                // setTasks([...oldTasks]);
    }

    const state: State = {
        tasks
    }

    const actions: Actions = {
        addTask
    }

    return (
        <TasksContext.Provider value={[state, actions]}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContext; 

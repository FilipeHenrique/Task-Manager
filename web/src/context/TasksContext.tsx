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

    const editTask = (taskId: number, taskTitle: string ) => {
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex] = {id: taskId, title: taskTitle};

        setTasks([...updatedTasks]);
    }

    const deleteTask = (taskId: number) => {
        const updatedTasks = tasks.filter((task)=> task.id !== taskId);
        setTasks([...updatedTasks]);
    }

    const state: State = {
        tasks
    }

    const actions: Actions = {
        addTask,
        editTask,
        deleteTask
    }

    return (
        <TasksContext.Provider value={[state, actions]}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContext; 

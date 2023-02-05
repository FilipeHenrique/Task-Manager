import { createContext, ReactNode, useEffect, useState } from "react"
import { Actions, State, Task, TasksContextType } from './types'

const TasksContext = createContext<TasksContextType | null>(null);

const storageTasks = JSON.parse(localStorage.getItem('tasks')!) || [{id: 0,text: ''}];
const data = storageTasks ;

export const TasksProvider = ({ children }: {children: ReactNode}) => {

    const [tasks, setTasks] = useState<Task[]>(data);

    const addTask = (newTask: Task) => {
        const oldTasks = [...tasks];
        setTasks([...oldTasks, newTask]);
    }

    const editTask = (taskId: number, tasktext: string ) => {
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex] = {id: taskId, text: tasktext};
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

    useEffect(()=> {
        localStorage.setItem('tasks',JSON.stringify(tasks));
    },[tasks])

    return (
        <TasksContext.Provider value={[state, actions]}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContext; 

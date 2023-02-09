import { createContext, ReactNode, useEffect, useState } from "react"
import { Task } from "../types"
import {defaultTaskColor,defaultTaskHeight,defaultTaskWidth,defaultTextColor, data} from './TaskContextUtils'

type State = {
    tasks: Task[]
}

type Actions = {
    addTask: () => void,
    editTask: (newTask: Task) => void,
    deleteTask: (taskId: number) => void
}

type TasksContextType = [State,Actions]

const TasksContext = createContext<TasksContextType | null>(null);

export const TasksProvider = ({ children }: {children: ReactNode}) => {

    const [tasks, setTasks] = useState<Task[]>(data);

    const addTask = () => {
        const newId = Math.random();
        setTasks([...tasks, { 
            id: newId, 
            text: '',
            width: defaultTaskWidth,
            height: defaultTaskHeight,
            taskColor: defaultTaskColor,
            textColor: defaultTextColor
        }]);
    }

    const editTask = (newTask: Task) => {
        const taskIndex = tasks.findIndex((task) => task.id === newTask.id);
        const updatedTasks = [...tasks];
        updatedTasks[taskIndex] = newTask;
        setTasks(updatedTasks);
    }

    const deleteTask = (taskId: number) => {
        const updatedTasks = tasks.filter((task)=> task.id !== taskId);
        setTasks(updatedTasks);
    }

    const state: State = {
        tasks
    }

    const actions: Actions = {
        addTask,
        editTask,
        deleteTask
    }

    useEffect(() => {
        localStorage.setItem('tasks',JSON.stringify(tasks));
    },[tasks])

    return (
        <TasksContext.Provider value={[state, actions]}>
            {children}
        </TasksContext.Provider>
    );
}

export default TasksContext; 

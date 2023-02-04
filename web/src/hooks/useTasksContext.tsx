import { useContext } from "react";
import TasksContext from "../context/TasksContext";

export default function useTasksContext(){
    const context = useContext(TasksContext);

    if (!context) {
        throw new Error("TasksContext could not be loaded");
    }

    return context;
}
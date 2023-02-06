import AddTaskButton from "../components/AddTaskButton";
import useTasksContext from "../hooks/useTasksContext";

export default function AddTaskContainer() {

    const [,{addTask}] = useTasksContext();
    
    return (
            <AddTaskButton addTask={addTask}/>
    );
}
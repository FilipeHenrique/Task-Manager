import AddTask from "../components/AddTask";
import useTasksContext from "../hooks/useTasksContext";

export default function AddTaskContainer() {

    const [,{addTask}] = useTasksContext();
    
    return (
        <div>
            <AddTask addTask={addTask}/>
        </div>
    );
}
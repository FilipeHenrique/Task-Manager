import TaskComponent from "../components/TaskComponent";
import useTasksContext from "../hooks/useTasksContext";

export default function TasksContainer() {
    const [{tasks},{editTask,deleteTask}] = useTasksContext();
    return(
        // <div className="flex gap-5 flex-wrap ">
        // <div className="grid grid-cols-3 auto-cols-auto auto-rows-auto grid-flow-row gap-5">
        // <div className="grid grid-cols-3 grid-flow-row gap-5 bg-red-200 w-full h-full">
        <div className="flex flex-wrap flex-1 gap-5">
            {tasks?.map((task)=>{
                return <TaskComponent key={task.id} id={task.id} text={task.text} editTask={editTask} deleteTask={deleteTask} />
            })}
        </div>
    );
}
import TaskComponent from "../components/TaskComponent";
import useTasksContext from "../hooks/useTasksContext";

export default function TasksContainer() {
    const [{tasks},{editTask,deleteTask}] = useTasksContext();
    return(
        <div className="flex flex-col gap-3 min-w-[700px]">
            {tasks.map((task,index)=>{
                 return <TaskComponent id={task.id} key={index} title={task.title} editTask={editTask} deleteTask={deleteTask} />
            })}
        </div>
    );
}
import TaskComponent from "../components/TaskComponent";
import useTasksContext from "../hooks/useTasksContext";

export default function TasksContainer() {
    const [{tasks},{editTask,deleteTask}] = useTasksContext();
    return(
        <div className="flex flex-col gap-3 min-w-[700px]">
            {tasks?.map((task)=>{
                return <TaskComponent key={task.id} id={task.id} title={task.title} editTask={editTask} deleteTask={deleteTask} />
            })}
        </div>
    );
}
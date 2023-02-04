import TaskComponent from "../components/TaskComponent";
import useTasksContext from "../hooks/useTasksContext";

export default function TasksContainer() {
    const [{tasks},] = useTasksContext();
    return(
        <div className="flex flex-col gap-3 min-w-[700px]">
            {tasks.map((task,index)=>{
                 return <TaskComponent id={0} key={index} title={task.title} />
            })}
        </div>
    );
}
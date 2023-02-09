import { useAutoAnimate } from '@formkit/auto-animate/react'
import AddTaskButton from '../components/AddTaskButton';
import TaskComponent from '../components/TaskComponent';
import useTasksContext from '../hooks/useTasksContext'

export default function MainPage() {

    const [{tasks},{addTask,editTask,deleteTask}] = useTasksContext();

    const [animateRef] = useAutoAnimate<HTMLDivElement>();

    return(
        <div className='bg-[#292735] min-h-screen'>

            <AddTaskButton addTask={addTask}/>

            <div className='top-0 p-4 z-10'>
                <h1 className='text-3xl text-neutral-300'>pIT</h1>
            </div>
            
            <div className='flex flex-col items-center justify-center py-20 px-40 gap-6 h-full' >
                <div className="flex flex-wrap flex-1 gap-5" ref={animateRef}>
                    {tasks?.map((task)=>{
                        return <TaskComponent 
                            key={task.id} 
                            task={task}
                            editTask={editTask} 
                            deleteTask={deleteTask} 
                        />
                    })}
                </div>
            </div>
            
      </div>
    );
}
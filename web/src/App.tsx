import './App.css'
import AddTaskContainer from './containers/AddTaskContainer'
import TasksContainer from './containers/TasksContainer'
import { TasksProvider } from './context/TasksContext'

function App() {


  return (
    <TasksProvider>
      <div className='bg-[#292735] min-h-screen'>
  
        <AddTaskContainer />

        <div className='top-0 p-4 z-10'>
          <h1 className='text-3xl text-neutral-300'>pIT</h1>
        </div>
        
        <div className='flex flex-col items-center justify-center py-20 px-40 gap-6 h-full' >
          <TasksContainer />
        </div>
      </div>
    </TasksProvider>
  )
}

export default App

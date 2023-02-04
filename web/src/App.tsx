import './App.css'
import AddTaskContainer from './containers/AddTaskContainer'
import TasksContainer from './containers/TasksContainer'
import { TasksProvider } from './context/TasksContext'

function App() {


  return (
    <TasksProvider>
      <div className='bg-gray-200 min-h-screen relative'>

        <AddTaskContainer />

        <div className='flex flex-col items-center justify-center top-0 p-4 z-10'>
          <h1 className='text-5xl text-cyan-700'>Post IT</h1>
        </div>
        
        <div className='flex flex-col items-center justify-center py-20 px-40 gap-6 h-full' >
          <TasksContainer />
        </div>
      </div>
    </TasksProvider>
  )
}

export default App

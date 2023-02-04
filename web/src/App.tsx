import './App.css'
import AddTaskContainer from './containers/AddTaskContainer'
import TasksContainer from './containers/TasksContainer'
import { TasksProvider } from './context/TasksContext'

function App() {


  return (
    <TasksProvider>
      <div className='flex flex-col items-center justify-center py-20 px-40 gap-6' >
        <h1 className='text-6xl'>Task Manager</h1>
        <AddTaskContainer />
        <TasksContainer />
      </div>
    </TasksProvider>
  )
}

export default App

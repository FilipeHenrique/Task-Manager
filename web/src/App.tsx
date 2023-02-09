import './App.css'
import { TasksProvider } from './context/TasksContext'
import MainPage from './pages/MainPage'

function App() {


  return (
    <TasksProvider>
      <MainPage />
    </TasksProvider>
  )
}

export default App

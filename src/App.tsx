import { HashRouter, Route, Routes } from 'react-router'
import TaskList from './pages/TaskList'
import { TaskDetails } from './pages/TaskDetails'

function App() {

  return (
    <HashRouter>
      <div className='min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-white font-montserrat'>
        <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/task/:id" element={<TaskDetails/>}/>
        </Routes>

      </div>
    </HashRouter>
  )
}

export default App

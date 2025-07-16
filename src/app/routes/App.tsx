import { HashRouter, Route, Routes } from 'react-router'
import { PageEditTask } from '@/pages/edit-task'
import { PageHome } from '@/pages/home'
import PageNewTask from '@/pages/new-task'

function App() {

  return (
    <HashRouter>
      <div className='min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-white font-montserrat'>
        <Routes>
          <Route path="/" element={<PageHome/>}/>
          <Route path="/task/:id" element={<PageEditTask/>}/>
          <Route path="/task/new" element={<PageNewTask/>}/>
        </Routes>

      </div>
    </HashRouter>
  )
}

export default App

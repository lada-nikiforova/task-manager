import Header from "../components/Header";
import TaskItem from "../components/TaskItem"
import { taskMock } from "../mock/taskMock"
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

export const TaskList = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <Header/>
      <div className=" bg-opacit py-5 px-6 md:px-10 shadow-xl  rounded-4xl flex flex-col items-center">
        <div className="w-full mb-4 md:mb-6 flex justify-between text-indigo-500">
          <div className="w-40 md:w-80 px-2 py-1 border-2  border-indigo-300  rounded-xl flex gap-1 items-center">
            <SearchIcon sx={{fontSize:20}}/>
            <input className=" w-full font-bold px-2 focus:outline-none " type="text" placeholder="Search"/>
          </div>
          <button className="cursor-pointer">
            <SortIcon/>
          </button>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-start ">
          <button className="border-3 border-dashed cursor-pointer border-indigo-300 shadow-xl hover:shadow-indigo-300 text-6xl h-40 rounded-2xl flex justify-center items-center">
            <AddIcon className='text-indigo-500' sx={{fontSize:52}}/>
          </button>
            {taskMock.map(task => (
                <TaskItem key={task.id} task={task}/>
            ))}
        </div>
      </div>
      
    </div>
  )
}

export default TaskList

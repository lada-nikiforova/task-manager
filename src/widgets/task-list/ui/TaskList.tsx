import { useAppDispatch, useAppSelector } from '@/app/provider/store';
import { loadTasksFromStorage, TaskItem } from '@/entities/task';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import { useEffect } from 'react';
import { Link } from 'react-router';

export const TaskList = () => {
    const dispatch = useAppDispatch();
    const task = useAppSelector((state) => state.tasks.tasks);
    useEffect(() => {
        const saved = localStorage.getItem('tasks');
        if (saved) {
          const loadedTasks = JSON.parse(saved);
          dispatch(loadTasksFromStorage(loadedTasks));
        }
    }, [dispatch]);      
    useEffect(() => {
        console.log('Текущий стейт задач:', task);
        localStorage.setItem('tasks', JSON.stringify(task));
    }, [task]);
  return (
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
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-center items-start ">
          <Link to={'/task/new'} className="border-3 min-w-50 border-dashed cursor-pointer border-indigo-300 shadow-xl hover:shadow-indigo-300 text-6xl h-40 rounded-2xl flex justify-center items-center transition-all duration-300">
            <AddIcon className='text-indigo-500' sx={{fontSize:52}}/>
          </Link>
            {task.map(task => (
                <TaskItem key={task.id} task={task}/>
            ))}
        </div>
    </div>
  )
}

export default TaskList

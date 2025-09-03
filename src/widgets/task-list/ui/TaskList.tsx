import { useAppDispatch, useAppSelector } from '@/app/provider/store';
import { fetchTasks,  TaskItem } from '@/entities/task';
import { SearchBar, SortBar, useFilteredTasks } from '@/features/filtered-task';
import { Loader } from '@/shared';
import AddIcon from '@mui/icons-material/Add';
import SortIcon from '@mui/icons-material/Sort';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export const TaskList = () => {
    const dispatch = useAppDispatch();
    const task = useAppSelector((state) => state.tasks.tasks);
    const loading = useAppSelector((state) => state.tasks.isLoading);
    const [filters, setFilters] = useState({
      sortBy: 'Date',
      category: 'All Category',
      status: 'All Status',
      priority: 'All Priority',
      search: '',
    });
    const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
    const filteredTasks = useFilteredTasks(task, filters);
    console.log(useFilteredTasks(task, filters))
    useEffect (() => {
        const saved = localStorage.getItem('tasks');
        if (saved) {
          const loadedTasks = JSON.parse(saved);
          dispatch(fetchTasks(loadedTasks));
        }
    }, [dispatch]);  
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(task));
    }, [task]);

    if (loading) {
      return <Loader/>
    }
    

  return (
    <div className="w-full bg-opacit py-5 px-6 md:px-10 shadow-xl rounded-4xl flex flex-col items-center">
        <div className="relative w-full mb-4 md:mb-6 flex justify-between text-indigo-500">
          <SearchBar value={filters.search} onChange={(val) => setFilters(f => ({...f, search: val}))}/>
          <button onClick={()=>{setIsSortOpen(!isSortOpen)}} className="cursor-pointer rounded-full bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-500  p-2 transition-all duration-300 flex items-center text-indigo-400">
            <SortIcon/>
          </button>
          {isSortOpen && (
            <SortBar filters={filters} setFilters={setFilters} setIsSortOpen={setIsSortOpen}/>
          )}
        </div>
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-center items-start ">
          <Link to={'/task/new'} className="border-3 min-w-50 border-dashed cursor-pointer border-indigo-300 shadow-xl hover:shadow-indigo-300 text-6xl h-40 rounded-2xl flex justify-center items-center transition-all duration-300">
            <AddIcon className='text-indigo-500' sx={{fontSize:52}}/>
          </Link>
            {filteredTasks.map(task => (
                <TaskItem key={task.id} task={task}/>
            ))}
        </div>
    </div>
  )
}

export default TaskList

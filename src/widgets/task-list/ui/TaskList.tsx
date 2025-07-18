import { useAppDispatch, useAppSelector } from '@/app/provider/store';
import { loadTasksFromStorage, TaskItem } from '@/entities/task';
import { SelectSort } from '@/shared';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export const TaskList = () => {
    const dispatch = useAppDispatch();
    const task = useAppSelector((state) => state.tasks.tasks);
    const SortTask = ['Date', 'Priority'];
    const Category = ['All Category', 'Bug', 'Feature', 'Documentation', 'Refactor', 'Test'];
    const Status = ['All Status', 'To Do', 'In Progress', 'Done'];
    const Priority = ['All Priority', 'Low', 'Medium', 'High'];

    const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState('Date');
    const [categoryFilter, setCategoryFilter] = useState('All Category');
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [priorityFilter, setPriorityFilter] = useState('All Priority');
    const [search, setSearch] = useState('');

    const filteredTasks = task
      .filter((task) => {
        return (
          (categoryFilter === 'All Category' || task.category === categoryFilter) &&
          (statusFilter === 'All Status' || task.status === statusFilter) &&
          (priorityFilter === 'All Priority' || task.priority === priorityFilter)
        );
      })
      .filter((task) =>{
        return (
          task.title.toLowerCase().includes(search.toLowerCase()) ||
          task.description?.toLowerCase().includes(search.toLowerCase())
        );
      })
      .sort((a, b) => {
        if (sortBy === 'Date') {
          return new Date(b.data).getTime() - new Date(a.data).getTime();
        }
        if (sortBy === 'Priority') {
          const order = ['Low', 'Medium', 'High'];
          return order.indexOf(b.priority) - order.indexOf(a.priority);
        }
        return 0;
      });


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
    <div className="w-full bg-opacit py-5 px-6 md:px-10 shadow-xl rounded-4xl flex flex-col items-center">
        <div className="relative w-full mb-4 md:mb-6 flex justify-between text-indigo-500">
          <div className="w-50 md:w-80 px-2 py-1 border-2  border-indigo-300  rounded-xl flex gap-1 items-center">
            <SearchIcon sx={{fontSize:20}}/>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full font-bold px-2 focus:outline-none " type="text" placeholder="Search"/>
          </div>
          <button onClick={()=>{setIsSortOpen(!isSortOpen)}} className="cursor-pointer rounded-full bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-500  p-2 transition-all duration-300 flex items-center text-indigo-400">
            <SortIcon/>
          </button>
          {isSortOpen && (
            <div className="absolute right-0 top-full grid gap-5 grid-cols-1 md:grid-cols-2 mt-2 bg-white border-2 border-indigo-200 rounded-lg shadow-lg p-4 z-50">
              <SelectSort value={sortBy} options={SortTask} onChange={(val) => {setSortBy(val); setIsSortOpen(false);}}/>
              <SelectSort value={categoryFilter} options={Category} onChange={(val) => {setCategoryFilter(val); setIsSortOpen(false);}}/>
              <SelectSort value={statusFilter} options={Status} onChange={(val) => {setStatusFilter(val); setIsSortOpen(false);}}/>
              <SelectSort value={priorityFilter} options={Priority} onChange={(val) => {setPriorityFilter(val); setIsSortOpen(false);}}/>
            </div>
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

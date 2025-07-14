import Header from "../components/Header";
import TaskItem from "../components/TaskItem"
import { taskMock } from "../mock/taskMock"
import AddIcon from '@mui/icons-material/Add';

export const TaskList = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <Header/>
      <div className=" w-[85vw] sm:w-[95vw] xl:w-[85vw] bg-opacit  p-3 shadow-xl  rounded-4xl flex flex-col items-center">
        
        <h1 className="mb-5 text-start text-black font-bold text-4xl">Список задач</h1>
        <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-start ">
          <button className="border-3 border-dashed  border-black shadow-xl text-6xl h-40 rounded-2xl flex justify-center items-center">
            <AddIcon sx={{fontSize:52}}/>
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

import { categoryColors, priorityColors, statusColors } from "../types/color";
import type { Task } from "../types/task";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router";

interface Props {
  task: Task;
}


export const TaskItem: React.FC<Props> = ({ task }) => {
  const bgCategory = categoryColors[task.category];
  const bgStatus = statusColors[task.status];
  const bgPriority = priorityColors[task.priority];

  return (
    <Link to={`task/${task.id}`} className={`${bgCategory} w-50 lg:w-65 cursor-pointer text-black shadow-xl rounded-2xl p-3  hover:shadow-indigo-300`}>
      <div className="flex justify-between h-8 lg:h-12  mb-2">
        <p className="text-sm lg:text-lg font-bold shadow-lg text-indigo-800 bg-light rounded-md lg:rounded-xl flex items-center h-full px-2 lg:px-4 mb-2">{task.category}</p>
        <div className="flex h-full gap-1">
          <button className="cursor-pointer text-redTxt rounded-md lg:rounded-xl shadow-lg bg-light w-8 lg:w-12 flex items-center justify-center"><DeleteIcon/></button>
        </div>
      </div>
      
        <div className="mb-2 ">
            <h3 className="font-bold  break-auto text-md lg:text-lg">{task.title}</h3>
            {task.description && (
                <p className="text-sm break-auto lg:text-md">{task.description}</p>
            )}
        </div>
        <div className="flex text-sm lg:text-md gap-2 mb-2">
            <span className={`${bgStatus} border px-3 py-1 rounded-full`}>{task.status}</span>
            <span className={`${bgPriority} border px-3 py-1 rounded-full`}>{task.priority}</span>
        </div>
    </Link>
  )
}

export default TaskItem

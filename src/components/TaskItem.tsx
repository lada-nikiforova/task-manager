import { categoryColors, priorityColors, statusColors } from "../types/color";
import type { Task } from "../types/task";
import EditIcon from '@mui/icons-material/Edit';
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
    <div className={`${bgCategory} lg:w-77 w-70  text-black shadow-xl rounded-2xl p-3 `}>
      <div className="flex justify-between h-10 lg:h-12 mb-2">
        <p className="text-md lg:text-lg font-bold shadow-lg bg-light rounded-xl flex items-center h-full px-4 mb-2">{task.category}</p>
        <div className="flex h-full gap-1">
          <Link to={`task/${task.id}`} className="cursor-pointer shadow-lg rounded-xl bg-light w-10 lg:w-12 flex items-center justify-center"><EditIcon/></Link>
          <button className="cursor-pointer  rounded-xl shadow-lg bg-light w-10 lg:w-12 flex items-center justify-center"><DeleteIcon/></button>
        </div>
      </div>
      
        <div className="mb-2">
            <h3 className="font-bold text-lg lg:text-xl">{task.title}</h3>
            {task.description && (
                <p className="text-md lg:text-lg">{task.description}</p>
            )}
        </div>
        <div className="flex flex-nowrap gap-2 mb-2">
            <span className={`${bgStatus} border px-3 py-1 rounded-full`}>{task.status}</span>
            <span className={`${bgPriority} border px-3 py-1 rounded-full`}>{task.priority}</span>
        </div>
    </div>
  )
}

export default TaskItem

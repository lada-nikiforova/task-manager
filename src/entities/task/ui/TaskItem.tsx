import { categoryColors, priorityColors, statusColors } from "@/shared/config/color";
import type { Task } from "../model/task";

import { useNavigate } from "react-router";
import { DeleteTaskForm } from "@/features/delete-task";

interface Props {
  task: Task;
}

export const TaskItem: React.FC<Props> = ({ task }) => {
  const bgCategory = categoryColors[task.category];
  const bgStatus = statusColors[task.status];
  const bgPriority = priorityColors[task.priority];
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`task/${task.id}`)} className={`cursor-pointer text-black shadow-xl rounded-2xl p-3 border-3 border-indigo-300  hover:shadow-indigo-300 transition-all duration-300`}>
      <div className={`${bgCategory} inline-flex items-center rounded-full mb-2`}>
        <p className="text-md lg:text-xl px-3 py-1 font-medium">&bull; {task.category}</p>
      </div>
      <div className="mb-1 ">
          <h3 className="font-bold  break-auto text-md lg:text-lg">{task.title}</h3>
          {task.description && (
              <p className="text-sm break-auto lg:text-md">{task.description}</p>
          )}
      </div>
      <p className="text-sm lg:text-md font-medium text-gray-400 mb-3">{new Date(task.data).toLocaleDateString("en-US", options)}</p>
      <div className="flex text-sm lg:text-md gap-2 mb-4">
          <span className={`${bgStatus} border px-3 py-1 rounded-full`}>{task.status}</span>
          <span className={`${bgPriority} border px-3 py-1 rounded-full`}>{task.priority}</span>
      </div>
      <div className="flex justify-between items-center px-2 pt-2 border-t-1 border-indigo-300">
        <p className="text-sm  text-indigo-400">click to edit</p>
        <DeleteTaskForm value={task}/>
      </div>
      
    </div>
  )
}

export default TaskItem

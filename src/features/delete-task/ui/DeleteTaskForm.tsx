import { useAppDispatch } from '@/app/provider/store';
import { deleteTask, type Task } from '@/entities/task';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
interface Props {
    value: Task,
}
export const DeleteTaskForm: React.FC<Props> = ({value}) => {
    const dispatch = useAppDispatch();
  return (
    <div className="flex h-full gap-1">
        <button onClick={(e)=> {e.stopPropagation(); dispatch(deleteTask(value))}} className="cursor-pointer hover:rounded-full hover:p-2 hover:bg-indigo-200 transition-all duration-300 flex items-center text-indigo-400 "><DeleteOutlineOutlinedIcon/></button>
    </div>
  )
}

export default DeleteTaskForm

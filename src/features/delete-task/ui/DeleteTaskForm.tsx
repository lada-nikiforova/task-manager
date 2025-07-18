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
        <button onClick={(e)=> {e.stopPropagation(); dispatch(deleteTask(value))}} className="cursor-pointer rounded-full bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-500 p-2 transition-all duration-300 flex items-center text-indigo-400 "><DeleteOutlineOutlinedIcon sx={{fontSize:30}}/></button>
    </div>
  )
}

export default DeleteTaskForm

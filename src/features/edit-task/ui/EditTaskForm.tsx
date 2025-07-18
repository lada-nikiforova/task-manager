import { ChipSelector, InputForm, SelectForm } from "@/shared";
import { editTask, TaskPrior, taskStat, type Task, type TaskPriority, type TaskStatus } from "@/entities/task";
import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/provider/store";

export const EditTaskForm = () => {
    const param = useParams<{id : string}>();
    const [editedTask, setEditedTask] = useState<Task | null>(null); 
    const [error, setError] = useState<string | null>(null); 
    const task = useAppSelector(state =>
      state.tasks.tasks.find(task => task.id === param.id)
    );

    useEffect(() => {
      if (task) {
        setEditedTask(task);
      }
    }, [task]);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        if(!editedTask?.title.trim()){
          setError('Title is required');
          return
        }

        if (editedTask) 
        {
          dispatch(editTask(editedTask))
          await new Promise(resolve => setTimeout(resolve, 0));
          navigate('/')
        }
    }
        
    return(
      <form onSubmit={handleSubmit} className="p-5 flex flex-col w-[70vw] shadow-lg bg-opacit rounded-2xl justify-center">
          <InputForm label="Title" value={editedTask?.title} onChange={val => (setEditedTask((prev) => prev ? { ...prev, title: val } : prev))}/>
          {error && <p className="text-red-500">{error}</p>}
          <InputForm label="Description" value={editedTask?.description} onChange={val => (setEditedTask((prev) => prev ? { ...prev, description: val } : prev))}/>
          <SelectForm value={editedTask?.category} onChange={val => (setEditedTask((prev) => prev ? { ...prev, category: val } : prev))}/>
          <ChipSelector<TaskStatus> label="Status" options={taskStat} value={editedTask?.status} onChange={val => (setEditedTask((prev) => prev ? { ...prev, status: val } : prev))}/>
          <ChipSelector<TaskPriority> label="Priority" options={TaskPrior} value={editedTask?.priority} onChange={val => (setEditedTask((prev) => prev ? { ...prev, priority: val } : prev))}/>
          <div className="flex flex-wrap gap-3 mt-3 justify-between font-bold">
              <button type="submit" className=" cursor-pointer bg-indigo-500 text-light hover:bg-indigo-700 active:bg-indigo-800 rounded-3xl px-4 py-2 md:px-10 shadow-xl  transition-all duration-300" >Сохранить</button>
              <Link className="cursor-pointer bg-indigo-200 hover:bg-indigo-500 active:bg-indigo-600 rounded-3xl px-4 py-2 md:px-10 shadow-xl transition-all duration-300" to={'/'}>Отменить</Link>
          </div>
          
      </form>
  )
}

export default EditTaskForm

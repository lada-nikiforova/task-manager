import { ChipSelector, InputForm, SelectForm } from "@/shared";
import { addTask, TaskPrior, taskStat, type Task, type TaskPriority, type TaskStatus } from "@/entities/task";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useAppDispatch } from "@/app/provider/store";

export const NewTaskForm = () => {
    const [newTask, setNewTask] = useState<Task>({
        id: crypto.randomUUID(),
        title: '',
        description: '',
        category: 'Bug',
        status: taskStat[0],
        priority: TaskPrior[0],
        data: new Date(),
    });
    const [error, setError] = useState<string|null>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault();

        if(!newTask.title.trim()){
            setError('Title is required');
            return
        }
        dispatch(addTask(newTask));
        navigate('/')

    }
    
  return (
    <form onSubmit={handleSubmit} className="p-5 flex flex-col w-[70vw] shadow-lg bg-opacit rounded-2xl justify-center">
        <InputForm label="Title" placeholder="Title of your task" value={newTask?.title} onChange={val => (setNewTask((prev) => prev ? { ...prev, title: val } : prev))}/>
        {error && <p className="text-red-500">{error}</p>}
        <InputForm label="Description" placeholder="Describe your task" value={newTask?.description} onChange={val => (setNewTask((prev) => prev ? { ...prev, description: val } : prev))}/>
        <SelectForm value={newTask?.category} onChange={val => (setNewTask((prev) => prev ? { ...prev, category: val } : prev))}/>
        <ChipSelector<TaskStatus> label="Status" options={taskStat} value={newTask?.status} onChange={val => (setNewTask((prev) => prev ? { ...prev, status: val } : prev))}/>
        <ChipSelector<TaskPriority> label="Priority" options={TaskPrior} value={newTask?.priority} onChange={val => (setNewTask((prev) => prev ? { ...prev, priority: val } : prev))}/>
        <div className="flex flex-wrap gap-3 mt-3 justify-between font-bold">
            <button type="submit" className=" bg-indigo-500 text-light hover:bg-indigo-700 active:bg-indigo-800 rounded-3xl px-4 py-2 md:px-10 shadow-xl">Сохранить</button>
            <Link className="bg-indigo-200 hover:bg-indigo-500 active:bg-indigo-600 rounded-3xl px-4 py-2 md:px-10 shadow-xl" to={'/'}>Отменить</Link>
        </div>
        
    </form>
  )
}

export default NewTaskForm

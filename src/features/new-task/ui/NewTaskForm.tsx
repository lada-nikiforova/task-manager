import { ChipSelector, InputForm, SelectForm } from "@/shared";
import { addTaskAsync, TaskPrior, taskStat, type Task, type TaskPriority, type TaskStatus } from "@/entities/task";
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

    const updateTaskField = <K extends keyof Task>(field: K, value: Task[K]) => {
        setNewTask((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit= async(e: React.FormEvent)=>{
        e.preventDefault();

        if(!newTask.title.trim()){
            setError('Title is required');
            return
        }
        await dispatch(addTaskAsync(newTask)).unwrap();
        navigate("/");

    }
    
  return (
    <form onSubmit={handleSubmit} className="p-5 flex flex-col w-[70vw] shadow-lg bg-opacit rounded-2xl justify-center">
        <InputForm label="Title" placeholder="Title of your task" value={newTask?.title} onChange={(val) => updateTaskField("title", val)}/>
        {error && <p className="text-red-500">{error}</p>}
        <InputForm label="Description" placeholder="Describe your task" value={newTask?.description} onChange={(val) => updateTaskField("description", val)}/>
        <SelectForm value={newTask?.category} onChange={(val) => updateTaskField("category", val)}/>
        <ChipSelector<TaskStatus> label="Status" options={taskStat} value={newTask?.status} onChange={(val) => updateTaskField("status", val)}/>
        <ChipSelector<TaskPriority> label="Priority" options={TaskPrior} value={newTask?.priority} onChange={(val) => updateTaskField("priority", val)}/>
        <div className="flex flex-wrap gap-3 mt-3 justify-between font-bold">
            <button type="submit" className="cursor-pointer bg-indigo-500 text-light hover:bg-indigo-700 active:bg-indigo-800 rounded-3xl px-4 py-2 md:px-10 shadow-xl  transition-all duration-300">Сохранить</button>
            <Link className="cursor-pointer bg-indigo-200 hover:bg-indigo-500 active:bg-indigo-600 rounded-3xl px-4 py-2 md:px-10 shadow-xl  transition-all duration-300" to={'/'}>Отменить</Link>
        </div>
        
    </form>
  )
}

export default NewTaskForm

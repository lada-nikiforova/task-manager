import { Link, useParams } from "react-router";
import { taskMock } from "../mock/taskMock";
import { useEffect, useMemo, useState } from "react";
import InputForm from "../components/InputForm";
import SelectForm from "../components/SelectForm";
import ChipSelector from "../components/ChipSelector";
import { TaskPrior, taskStat, type Task, type TaskPriority, type TaskStatus } from "../types/task";
import Header from "../components/Header";

export const TaskDetails = () =>  {
    const param = useParams<{id : string}>();
    const currentTask = useMemo(() => taskMock.find(item => item.id === param.id), [param]); 
    const [editedTask, setEditedTask] = useState<Task | null>(null);
    useEffect(() => {
    if (currentTask) {
        setEditedTask(currentTask);
    }
    }, [currentTask]);
    const saveTask = () => {
        const index = taskMock.findIndex((task) => task.id === editedTask?.id);
        if (index !== -1 && editedTask) {
          taskMock[index] = editedTask;
          console.log('Задача обновлена в taskMock:', taskMock);
        }
    };

    return (
        <div className=" flex flex-col items-center p-4 text-black">
            <Header/>
            <h1 className="mb-2 py-3 text-center font-bold text-4xl">Редактор задачи</h1>
            <form className="p-5 flex flex-col w-[70vw] shadow-lg bg-opacit rounded-2xl justify-center">
                <InputForm label="Title" value={editedTask?.title} onChange={val => (setEditedTask((prev) => prev ? { ...prev, title: val } : prev))}/>
                <InputForm label="Description" value={editedTask?.description} onChange={val => (setEditedTask((prev) => prev ? { ...prev, description: val } : prev))}/>
                <SelectForm value={editedTask?.category} onChange={val => (setEditedTask((prev) => prev ? { ...prev, category: val } : prev))}/>
                <ChipSelector<TaskStatus> label="Status" options={taskStat} value={editedTask?.status} onChange={val => (setEditedTask((prev) => prev ? { ...prev, status: val } : prev))}/>
                <ChipSelector<TaskPriority> label="Priority" options={TaskPrior} value={editedTask?.priority} onChange={val => (setEditedTask((prev) => prev ? { ...prev, priority: val } : prev))}/>
                    <div className="flex flex-wrap gap-3 justify-center text-light font-bold text-2xl">
                        <Link onClick={saveTask} className=" bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-800 rounded-3xl py-2 px-10 shadow-xl" to={'/'}>Сохранить</Link>
                        <Link className="bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-800 rounded-3xl py-2 px-10 shadow-xl" to={'/'}>Отменить</Link>
                    </div>
                
            </form>

        </div>
    );
}
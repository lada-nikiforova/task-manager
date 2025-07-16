import { EditTaskForm } from "@/features/edit-task";
import { Header } from "@/shared";


export const PageEditTask = () =>  {
    
    return (
        <div className=" flex flex-col items-center p-4 text-black text-md md:text-lg lg:text-xl">
            <Header/>
            <h2 className="mb-2 py-3 text-center font-bold text-4xl">Редактор задачи</h2>
            <EditTaskForm/>
        </div>
    );
}
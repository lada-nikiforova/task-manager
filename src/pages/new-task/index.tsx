import { NewTaskForm } from "@/features/new-task";
import { Header } from "@/shared";


export const PageNewTask = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <Header/>   
      <h2 className="mb-2 py-3 text-center font-bold text-4xl">Новая задача</h2> 
      <NewTaskForm/>  
    </div>
  )
}

export default PageNewTask



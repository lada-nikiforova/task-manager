import { NewTaskForm } from "@/features/new-task";
import { Header } from "@/shared";


export const PageNewTask = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <Header/>    
      <NewTaskForm/>  
    </div>
  )
}

export default PageNewTask

//можно вынести кнопки сохранить и отменить в отедльные компоненты (сохранить хз, в случае апдейда и в случае нового)
//написать окно с полями, по факту использовать все поля уже готовые только реализовать кнопку сохранить в стор


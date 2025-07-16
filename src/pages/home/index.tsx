import { Header } from "@/shared";
import { TaskList } from "@/widgets/task-list";



export const PageHome = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <Header/>
      <TaskList/>      
    </div>
  )
}

export default PageHome


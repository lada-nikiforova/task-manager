import type { Task } from "@/entities/task";

export interface Props {
    sortBy: string;
    category: string;
    status: string;
    priority: string;
    search: string;
}

export const useFilteredTasks = (tasks: Task[], filters: Props): Task[] => {
  const { sortBy, category, status, priority, search } = filters;
  return tasks
    .filter((task) => {
      return (
        (category === "All Category" || task.category === category) &&
        (status === "All Status" || task.status === status) &&
        (priority === "All Priority" || task.priority === priority)
      );
    })
    .filter((task) => {
      return (
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description?.toLowerCase().includes(search.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortBy === "Date") {
        return new Date(b.data).getTime() - new Date(a.data).getTime();
      }
      if (sortBy === "Priority") {
        const order = ["Low", "Medium", "High"];
        return order.indexOf(b.priority) - order.indexOf(a.priority);
      }
      return 0;
    });
};


export type TaskCategory = 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
export type TaskStatus = 'To Do' | 'In Progress' | 'Done';
export type TaskPriority = 'Low' | 'Medium' | 'High';
export const taskCategories: TaskCategory[] = ['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'];
export const taskStat: TaskStatus[] = ['To Do', 'In Progress', 'Done'];
export const TaskPrior: TaskPriority[] = ['Low', 'Medium', 'High'];
export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  data: Date;
}

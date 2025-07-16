import type { Task } from "../../entities/task/model/task";


export const taskMock: Task[] = [
  {
    id: crypto.randomUUID(),
    title: 'Fix login bug',
    description: 'App crashes when wrong password entered',
    category: 'Bug',
    status: 'In Progress',
    priority: 'High',
    data: new Date(2024, 11, 25, 14, 0, 0),
  },
  {
    id: crypto.randomUUID(),
    title: 'Write docs for setup',
    category: 'Documentation',
    status: 'To Do',
    priority: 'Medium',
    data: new Date(2022, 9, 25, 14, 0, 0),
  },
  {
    id: crypto.randomUUID(),
    title: 'Write docs for setup',
    description: 'App crashes when wrong password entered App crashes when wrong password entered App crashes when wrong password entered',
    category: 'Feature',
    status: 'Done',
    priority: 'Low',
    data: new Date(2025, 4, 23, 14, 0, 0),
  },
  {
    id: crypto.randomUUID(),
    title: 'Write docs for setup',
    category: 'Refactor',
    status: 'To Do',
    priority: 'Medium',
    data: new Date(2021, 10, 25, 14, 0, 0),
  },
  {
    id: crypto.randomUUID(),
    title: 'Write docs for setup',
    category: 'Test',
    status: 'To Do',
    priority: 'Medium',
    data: new Date(2024, 8, 22, 13, 0, 0),
  },
];

import type { Task } from "../types/task";


export const taskMock: Task[] = [
  {
    id: '1',
    title: 'Fix login bug',
    description: 'App crashes when wrong password entered',
    category: 'Bug',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Write docs for setup',
    category: 'Documentation',
    status: 'To Do',
    priority: 'Medium',
  },
  {
    id: '3',
    title: 'Write docs for setup',
    description: 'App crashes when wrong password entered App crashes when wrong password entered App crashes when wrong password entered',
    category: 'Feature',
    status: 'Done',
    priority: 'Low',
  },
  {
    id: '4',
    title: 'Write docs for setup',
    category: 'Refactor',
    status: 'To Do',
    priority: 'Medium',
  },
  {
    id: '5',
    title: 'Write docs for setup',
    category: 'Test',
    status: 'To Do',
    priority: 'Medium',
  },
];

import {expect, it} from 'vitest'
import type { Task } from '@/entities/task';
import { useFilteredTasks } from '@/features/filtered-task';
const task: Task[] = [
    {
        id: '1',
        title: 'Old task',
        description: 'This is description first',
        category: 'Documentation',
        status: 'To Do',
        priority: 'Medium',
        data: new Date(2022, 9, 25, 14, 0, 0),
    },
    {
        id: '2',
        title: 'New task',
        description: 'Hello world',
        category: 'Bug',
        status: 'In Progress',
        priority: 'High',
        data: new Date(2024, 11, 25, 14, 0, 0),
    },
];

it('поиск по заголовку 1', ()=>{
    const filters = { 
        sortBy: 'Date',
        category: 'All Category',
        status: 'All Status',
        priority: 'All Priority',
        search: 'old',
    }
    const res = useFilteredTasks(task, filters)
    expect(res.length).toBe(1);
    expect(res[0].id).toBe("1"); 
})

it('поиск по заголовку 2', ()=>{
    const filters = { 
        sortBy: 'Date',
        category: 'All Category',
        status: 'All Status',
        priority: 'All Priority',
        search: 'ta',
    }
    const res = useFilteredTasks(task, filters)
    expect(res.length).toBe(2); 
})

it('поиск по описанию', ()=>{
    const filters = { 
        sortBy: 'Date',
        category: 'All Category',
        status: 'All Status',
        priority: 'All Priority',
        search: 'descr',
    }
    const res = useFilteredTasks(task, filters)
    expect(res.length).toBe(1); 
})
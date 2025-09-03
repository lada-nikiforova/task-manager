import {expect, it} from 'vitest'
import type { Task } from '@/entities/task';
import { useFilteredTasks } from '@/features/filtered-task';
const task: Task[] = [
    {
        id: '1',
        title: 'Old task',
        category: 'Documentation',
        status: 'To Do',
        priority: 'Medium',
        data: new Date(2022, 9, 25, 14, 0, 0),
    },
    {
        id: '2',
        title: 'New task',
        category: 'Bug',
        status: 'In Progress',
        priority: 'High',
        data: new Date(2024, 11, 25, 14, 0, 0),
    },
];

it('сортирует задачи по дате', ()=>{
    const filters = { 
        sortBy: 'Date',
        category: 'All Category',
        status: 'All Status',
        priority: 'All Priority',
        search: '',
    }
    const res = useFilteredTasks(task, filters)
    expect(res[0].title).toBe("New task");
    expect(res[1].title).toBe("Old task"); 
})

it('сортирует задачи по приоритету', ()=>{
    const filters = { 
        sortBy: 'Priority',
        category: 'All Category',
        status: 'All Status',
        priority: 'All Priority',
        search: '',
    }
    const res = useFilteredTasks(task, filters)
    expect(res[0].priority).toBe("High");
    expect(res[1].priority).toBe("Medium"); 
})

it('фильтрация по категории', ()=>{
    const filters = { 
        sortBy: 'Priority',
        category: 'Documentation',
        status: 'All Status',
        priority: 'All Priority',
        search: '',
    }
    const res = useFilteredTasks(task, filters)
    expect(res.length).toBe(1);
    expect(res[0].id).toBe('1'); 
})
it('фильтрация по категории', ()=>{
    const filters = { 
        sortBy: 'Priority',
        category: 'Documentation',
        status: 'All Status',
        priority: 'All Priority',
        search: '',
    }
    const res = useFilteredTasks(task, filters)
    expect(res.length).toBe(1);
    expect(res[0].id).toBe('1'); 
})
it('фильтрация по статусу', ()=>{
    const filters = { 
        sortBy: 'Priority',
        category: 'All Category',
        status: 'In Progress',
        priority: 'All Priority',
        search: '',
    }
    const res = useFilteredTasks(task, filters)
    expect(res.length).toBe(1);
    expect(res[0].id).toBe('2'); 
})
it('фильтрация по приоритету', ()=>{
    const filters = { 
        sortBy: 'Priority',
        category: 'All Category',
        status: 'All Status',
        priority: 'High',
        search: '',
    }
    const res = useFilteredTasks(task, filters)
    expect(res.length).toBe(1);
    expect(res[0].id).toBe('2'); 
})
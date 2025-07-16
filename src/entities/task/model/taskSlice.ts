import { taskMock } from "@/shared";
import type { Task } from "./task";
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface TaskState {
    tasks: Task[];
}

const savedTasks = localStorage.getItem('tasks');
const initialState: TaskState = {
    tasks: savedTasks ? JSON.parse(savedTasks) : taskMock,
}

export const TaskSlice = createSlice({
    name: 'task',
    initialState,
    reducers:{
        addTask:(state, action: PayloadAction<Task>) =>{
            state.tasks.push(action.payload);
        },
        loadTasksFromStorage: (state, action: PayloadAction<Task[]>)=>{
            state.tasks = action.payload;
        },
        editTask:(state, action: PayloadAction<Task>)=>{
            const index = state.tasks.findIndex(t => t.id === action.payload.id);
            if (index !== -1){
                state.tasks[index] = action.payload
            }
        },
        deleteTask:(state, action: PayloadAction<Task>)=>{
            state.tasks = state.tasks.filter((t) => t.id !== action.payload.id)
        }

    }
})

export default TaskSlice.reducer;
export const { addTask, loadTasksFromStorage, editTask, deleteTask } = TaskSlice.actions;

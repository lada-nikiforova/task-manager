import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '@/app/api/api';
import type { Task } from './task';

interface TaskState {
    tasks: Task[],
    isLoading: boolean,
}
  
const initialState: TaskState = {
    tasks: [],
    isLoading: false,
};
export const TaskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getTaskAsync.fulfilled, (state, action) => {
            const found = state.tasks.find(t => t.id === action.payload.id);
            if (!found) {
              state.tasks.push(action.payload);
              state.isLoading = false;
            }
        });
        builder.addCase(fetchTasks.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTasks.rejected, (state) => {
            state.isLoading = false;
        });
        builder.addCase(deleteTaskAsync.fulfilled, (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        });
          

    },

});

export const fetchTasks = createAsyncThunk(
    'task/fetchTasks',
    api.getAllTasks
);

export const addTaskAsync = createAsyncThunk(
    'task/addTask',
    api.addTask
);

export const deleteTaskAsync = createAsyncThunk(
    'task/deleteTask',
    api.deleteTask
);

export const editTaskAsync = createAsyncThunk(
    'task/editTask',
    api.editTask
);

export const getTaskAsync = createAsyncThunk(
    'task/editTask',
    api.editTask
);

export default TaskSlice.reducer;

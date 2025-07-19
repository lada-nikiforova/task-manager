import type { Task } from '@/entities/task';
import axios from 'axios';

const BASE_URL = 'https://687b8febb4bc7cfbda864a8b.mockapi.io/api'; 

export const getAllTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${BASE_URL}/task`);
  return response.data;
};

export const addTask = async (task: Task): Promise<Task> => {
  const response = await axios.post(`${BASE_URL}/task`, task);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/task/${id}`);
};

export const editTask = async (task: Task): Promise<Task> => {
  const response = await axios.put(`${BASE_URL}/task/${task.id}`, task);
  return response.data;
};

export const getTask = async (task: Task): Promise<Task> => {
    const response = await axios.get(`${BASE_URL}/task/${task.id}`, task);
    return response.data;
  };


  

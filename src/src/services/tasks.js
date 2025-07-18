import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getTasks = () => {
  return axios.get(`${API_URL}/api/tasks`);
};

const createTask = (taskData) => {
  return axios.post(`${API_URL}/api/tasks`, taskData);
};

const updateTask = (id, taskData) => {
  return axios.put(`${API_URL}/api/tasks/${id}`, taskData);
};

const deleteTask = (id) => {
  return axios.delete(`${API_URL}/api/tasks/${id}`);
};

const getActivities = () => {
  return axios.get(`${API_URL}/api/activities`);
};

const smartAssign = (id) => {
  return axios.put(`${API_URL}/api/tasks/${id}/assign`);
};

export default {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getActivities,
  smartAssign
};

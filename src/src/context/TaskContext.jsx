import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSocket } from '../hooks/useSocket';
import api from '../services/tasks';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [activities, setActivities] = useState([]);
  const socket = useSocket();

  const fetchTasks = async () => {
    try {
      const response = await api.getTasks();
      setTasks(response.data);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    }
  };

  const fetchActivities = async () => {
    try {
      const response = await api.getActivities();
      setActivities(response.data);
    } catch (err) {
      console.error('Failed to fetch activities:', err);
    }
  };

  const updateTask = async (id, updates) => {
    try {
      await api.updateTask(id, updates);
      fetchTasks();
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchActivities();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('taskUpdated', ({ task, activity }) => {
        setTasks(prev => prev.map(t => t._id === task._id ? task : t));
        setActivities(prev => [activity, ...prev.slice(0, 19)]);
      });
    }

    return () => {
      if (socket) socket.off('taskUpdated');
    };
  }, [socket]);

  return (
    <TaskContext.Provider value={{ 
      tasks, 
      activities, 
      fetchTasks, 
      fetchActivities,
      updateTask
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);

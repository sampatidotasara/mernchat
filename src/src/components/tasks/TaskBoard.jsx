import React from 'react';
import TaskColumn from './TaskColumn';
import { useTasks } from '../../context/TaskContext';

const TaskBoard = () => {
  const { tasks } = useTasks();
  const statuses = ['Todo', 'In Progress', 'Done'];

  return (
    <div className="task-board">
      {statuses.map(status => (
        <TaskColumn
          key={status}
          status={status}
          tasks={tasks.filter(task => task.status === status)}
        />
      ))}
    </div>
  );
};

export default TaskBoard;

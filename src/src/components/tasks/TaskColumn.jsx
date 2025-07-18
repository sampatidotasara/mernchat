import React from 'react';
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';
import { useTasks } from '../../context/TaskContext';

const TaskColumn = ({ status, tasks }) => {
  const { updateTask } = useTasks();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item) => handleDrop(item.id),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  }));

  const handleDrop = (taskId) => {
    updateTask(taskId, { status });
  };

  return (
    <div
      ref={drop}
      className={`task-column ${isOver ? 'over' : ''}`}
    >
      <h3>{status}</h3>
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;

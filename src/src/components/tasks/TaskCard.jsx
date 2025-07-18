import React from 'react';
import { useDrag } from 'react-dnd';
import Button from '../ui/Button';

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: task._id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      className={`task-card ${isDragging ? 'dragging' : ''}`}
    >
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <div className="task-footer">
        <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
        {task.assignedUser && (
          <span className="assignee">{task.assignedUser.username}</span>
        )}
      </div>
    </div>
  );
};

export default TaskCard;

import React from 'react';
import { useTasks } from '../../context/TaskContext';

const ActivityLog = () => {
  const { activities } = useTasks();

  return (
    <div className="activity-log">
      <h3>Recent Activity</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity._id}>
            <span className="timestamp">
              {new Date(activity.createdAt).toLocaleString()}
            </span>
            <span className="action">{activity.details}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;

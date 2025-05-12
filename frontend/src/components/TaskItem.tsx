// TaskItem.tsx
import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete }) => {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        padding: '0.5rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
      }}
    >
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.title}
      </span>
      <button
        onClick={() => onComplete(task.id)}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Mark Completed
      </button>
    </li>
  );
};

export default TaskItem;

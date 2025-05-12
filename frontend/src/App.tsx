import React, { useEffect, useState } from 'react';
import { Task } from './types';
import TaskItem from './components/TaskItem';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');

  // Fetch tasks from the backend API
  const fetchTasks = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/tasks');
      if (!res.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await res.json();
      console.log('Fetched tasks:', data); // Log the tasks to check the data returned
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Add new task
  const addTask = async () => {
    if (title.trim() === '') {
      return; // Don't add empty tasks
    }
    const newTask: Task = { id: Date.now(), title, completed: false };
    try {
      await fetch('http://localhost:8000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });
      setTitle('');
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Mark task as completed
  const markCompleted = async (id: number) => {
    try {
      await fetch(`http://localhost:8000/api/tasks/${id}`, { method: 'PUT' });
      fetchTasks();
    } catch (error) {
      console.error('Error marking task as completed:', error);
    }
  };

  // Fetch tasks when the component mounts
  useEffect(() => {
    console.log('Fetching tasks on mount...'); // Log when fetching starts
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Task Tracker</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />
      <button onClick={addTask} style={{ padding: '0.5rem', fontSize: '1rem' }}>
        Add Task
      </button>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks available</p> // Log if no tasks are available
        ) : (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} onComplete={markCompleted} />
          ))
        )}
      </ul>
    </div>
  );
};

export default App;

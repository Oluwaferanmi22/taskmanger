import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const resp = await axios.get('/api/tasks');
    setTasks(resp.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const addTask = async (task) => {
    const resp = await axios.post('/api/tasks', task);
    setTasks([resp.data, ...tasks]);
  };

  const toggleTask = async (id, completed) => {
    const resp = await axios.put(`/api/tasks/${id}`, { completed });
    setTasks(tasks.map(t => (t._id === id ? resp.data : t)));
  };

  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">📝 Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

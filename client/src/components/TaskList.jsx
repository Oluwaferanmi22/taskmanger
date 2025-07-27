import React from 'react';

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <li key={task._id} className="flex justify-between items-center border p-3">
          <div className="flex items-center">
            <button
              onClick={() => onToggle(task._id, !task.completed)}
              className={`mr-3 px-2 py-1 ${task.completed ? 'bg-purple-500' : 'bg-gray-300'}`}
            >
              {task.completed ? 'Undo' : 'Done'}
            </button>
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.text}
            </span>
          </div>
          <button onClick={() => onDelete(task._id)} className="bg-red-500 text-white px-2 py-1">
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
}

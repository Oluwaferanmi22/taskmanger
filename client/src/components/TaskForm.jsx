import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (!text) return;
    onAdd({ text, completed: false });
    setText('');
  };

  return (
    <form onSubmit={onSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="New Task"
        value={text}
        onChange={e => setText(e.target.value)}
        className="flex-grow border p-2"
      />
      <button type="submit" className="bg-green-500 text-white p-2">
        Add
      </button>
    </form>
  );
}

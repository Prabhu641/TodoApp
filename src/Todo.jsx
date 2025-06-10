import React, { useState } from 'react';
import { CheckCircle, Circle, Trash2, PlusCircle } from 'lucide-react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => setInput(e.target.value);

  const handleAddTask = () => {
    if (input.trim() === '') return alert('Please enter a task');

    const newTask = { text: input, isDone: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const handleToggle = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updated);
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-100 to-indigo-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-800 mb-4">TaskMaster ✅</h1>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter a task..."
            value={input}
            onChange={handleChange}
          />
          <button
            onClick={handleAddTask}
            className="text-indigo-600 hover:text-indigo-900 transition"
          >
            <PlusCircle size={32} />
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between px-3 py-2 rounded-md border ${
                task.isDone ? 'bg-green-100 line-through text-gray-500' : 'bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <button onClick={() => handleToggle(index)} className="text-green-600">
                  {task.isDone ? <CheckCircle size={20} /> : <Circle size={20} />}
                </button>
                <span>{task.text}</span>
              </div>
              <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;

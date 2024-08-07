import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center w-3/4 mx-auto my-10">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} name="name" placeholder="Enter task namme" className="border-2 my-4 border-gray-500 rounded-md p-2 w-full" />
        <button type='submit' className="flex flex-row justify-between bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mx-6 rounded-md text-2xl" ><AddIcon /></button>
      </form>
  );
}

export default TaskInput;

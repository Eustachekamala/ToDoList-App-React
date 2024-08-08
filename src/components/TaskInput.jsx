import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function TaskInput({ onSubmit }) {
  const [newTask, setNewTask] = useState('');

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onSubmit(newTask); // Call the onSubmit function passed from the parent
      setNewTask(''); // Clear the input field
    } else {
      console.error('Task cannot be empty');
    }
  };

  return (
    <form onSubmit={handleNewTaskSubmit} className="flex flex-row items-center justify-center w-3/4 mx-auto my-10">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        name="task"
        placeholder="Enter task name"
        className="border-2 my-4 border-gray-500 rounded-md p-2 w-full"
      />
      <button
        type="submit"
        className="flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mx-2 rounded-md text-xl"
      >
        <AddIcon />
      </button>
    </form>
  );
}

export default TaskInput;

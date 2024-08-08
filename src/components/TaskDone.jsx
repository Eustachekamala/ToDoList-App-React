import React from 'react';
import { Delete } from '@mui/icons-material';

function TaskDone({ task, onTaskDelete }) {
  const handleTaskDelete = () => {
    onTaskDelete(task); // Pass the entire task object (consider parent logic)
  };

  return (
    <div className="task-item completed">
      <ul>
        <li className="flex flex-row items-center justify-between m-4">
          {task}
          <button className="py-3 px-4 bg-red-500 text-white rounded-md" onClick={handleTaskDelete}><Delete /></button>
        </li>
      </ul>
    </div>
  );
}

export default TaskDone;

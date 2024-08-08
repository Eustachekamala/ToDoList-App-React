import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { useState, useEffect } from 'react';

function TasksNotDone({ task, onTaskDone }) {
    const [isDone, setIsDone] = useState(false);

  // Handle task done
  const handleTaskDone = () => {
    onTaskDone(task);
    setIsDone(true);
  };

  return (
    <div className={`task-item ${task?.done ? 'completed' : ''}`}>
      <ul>
        {!task?.done && (
          <li className="flex flex-row items-center justify-between m-4">
            {task}
            <button className="py-3 px-4 bg-blue-500 text-white rounded-md" onClick={handleTaskDone}><DoneIcon /></button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default TasksNotDone;

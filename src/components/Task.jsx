import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function Task({ taskId, task, done, onTaskDone, onTaskDelete }) {
  // Handle task done
  const handleTaskDone = () => {
    onTaskDone(taskId); // Trigger the parent's handler for marking the task as done
  };

  // Handle task delete
  const handleTaskDelete = () => {
    onTaskDelete(taskId); // Trigger the parent's handler for deleting the task
  };

  return (
    <div className={`task-item ${done ? 'completed' : ''}`} onClick={handleTaskDone}>
      <ul>
        {!done  && (
          <li className="flex flex-row items-center justify-between m-4">
            {task}
            <button className="py-3 px-4 bg-blue-500 text-white rounded-md" onClick={handleTaskDone}><DoneIcon /></button>
          </li>
        )}
        {/* {done && (
          <li className="flex flex-row items-center justify-between">
            {task}
            <button className="py-4 px-4 bg-red-500 text-white rounded-md" onClick={handleTaskDelete}><DeleteIcon /></button>
          </li>
        )} */}
      </ul>
     
      <div className="task-actions">
{/*         
        <button onClick={handleTaskDelete} className="btn-delete"><DeleteIcon /></button> */}
      </div>
    </div>
  );
}

export default Task;

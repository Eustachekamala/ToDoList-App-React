import React, { useState, useEffect } from 'react';
import Task from './Task';

function TaskList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Log the entire response
        // Ensure that data.todos is an array
        if (Array.isArray(data.todos)) {
          setTodos(data.todos);
        } else {
          console.error('Unexpected data format:', data);
          setTodos([]); // Set empty array if data format is unexpected
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setTodos([]); // Set empty array in case of an error
      });
  }, []); // No need to include setTodos in the dependency array

  const handleTaskDone = (taskId) => {
    fetch(`http://localhost:3000/todos/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ done: true })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update todo');
        }
        setTodos(todos.map(todo =>
          todo.id === taskId ? { ...todo, done: true } : todo
        ));
      })
      .catch(error => console.error('Error updating todo:', error));
  };

  const handleTaskDelete = (taskId) => {
    fetch(`http://localhost:3000/todos/${taskId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete todo');
        }
        setTodos(todos.filter(todo => todo.id !== taskId));
      })
      .catch(error => console.error('Error deleting todo:', error));
  };

  return (
    <div className="task-list">
      {todos.length > 0 ? (
        todos.map(todo => (
          <Task
            key={todo.id}
            taskId={todo.id}
            task={todo.task}
            done={todo.done}
            onTaskDone={handleTaskDone}
            onTaskDelete={handleTaskDelete}
          />
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default TaskList;

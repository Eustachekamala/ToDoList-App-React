import React, { useState, useEffect } from "react";
import "./App.css";
import TasksNotDone from "./components/TasksNotDone";
import TaskDone from "./components/TaskDone";
import TaskInput from "./components/TaskInput";

function App() {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => {
        setTasks(data.todos);
        setDoneTasks(data.doneTodos);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Ensure loading state is reset in case of error
      });
  }, []);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDone = (index) => {
    const newTasks = [...tasks];
    const doneTask = newTasks.splice(index, 1)[0];
    setTasks(newTasks);
    setDoneTasks([...doneTasks, doneTask]);
  };

  const handleTaskDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleDoneTaskDelete = (index) => {
    const newDoneTasks = [...doneTasks];
    newDoneTasks.splice(index, 1);
    setDoneTasks(newDoneTasks);
  };

  return (
    <div className="w-full m-auto justify-center font-serif">
      <h1 className="w-2/5 m-auto font-bold text-4xl px-8 bg-blue-500 text-white text-center p-4 shadow-md my-8 rounded-xl">
        ToDoList App
      </h1>
      <TaskInput onSubmit={handleAddTask} onDelete={handleTaskDelete} />
      <div className="flex flex-row justify-around w-full my-10">
        <div className="flex flex-col list-none p-4 text-black text-center text-xl w-5/12 border-2 rounded-xl m-4 overflow-auto h-80">
          <h1 className="text-3xl font-bold">Tasks Not Done</h1>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TasksNotDone tasks={tasks} onTaskDone={handleTaskDone} />
          )}
        </div>
        <div className="flex flex-col list-none p-4 border-2 rounded-xl text-black text-center text-xl w-5/12 m-4 overflow-auto h-80">
          <h1 className="text-3xl font-bold">Tasks Done</h1>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TaskDone tasks={doneTasks} onTaskDelete={handleDoneTaskDelete} />
          )}
        </div>
      </div>
      <footer>
        <p className="text-center py-4 text-gray-500 text-2xl">
          Made with ❤️ by <a href="https://github.com/EustacheKamala" className="underline">Eustache Katembo</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import { Edit } from "@mui/icons-material";

function App(){
  const [isClickDone, setIsClickDone] = useState(false);
  const [isDeleteDone, setIsDeleteDone] = useState(false);

  function handleClick() {
    setIsClickDone(!isClickDone);
    console.log("Is Clicked", isClickDone);
  }

  function handleDelete() {
    setIsDeleteDone(!isDeleteDone);
    console.log("Is Deleted");
  }


  return (
    <div className="w-full  m-auto justify-center font-serif">
      <h1 className="w-2/5 m-auto font-bold text-4xl px-8 bg-blue-500 text-white text-center p-4 shadow-md my-4 rounded-xl">ToDoList App</h1>
      <form action="" className="flex flex-row items-center justify-center w-3/4 mx-auto my-10">
        <input type="text" name="name" placeholder="Enter task namme" className="border-2 my-4 border-gray-500 rounded-md p-2 w-full" />
        <button  className="flex flex-row justify-between bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mx-6 rounded-md text-2xl" ><AddIcon /></button>
      </form>
      
      <div className="flex flex-row  justify-around w-full my-10">
        <div className="flex flex-col list-none p-4  text-black text-center text-xl w-5/12 border-2 rounded-xl m-4">
          <h1 className="text-3xl font-bold">Tasks Not Done</h1>
          <ol>
            <li className="flex justify-between items-center border-gray-500 p-4">Install NodeJs <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleClick}><CheckCircleOutlineIcon /></button></li>
            <li className="flex justify-between items-center  p-4 border-gray-500">Install MongoDB <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleClick}><CheckCircleOutlineIcon /></button></li>
            <li className="flex justify-between items-center  p-4 border-gray-500">Install VSCode <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleClick}><CheckCircleOutlineIcon /></button></li>
            <li className="flex justify-between items-center p-4  border-gray-500">Install Git <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleClick}><CheckCircleOutlineIcon /></button></li>
          </ol>
        </div>
        <div className="flex flex-col list-none p-4 border-2 rounded-xl  text-black text-center text-xl w-5/12 m-4">
          <h1 className="text-3xl font-bold">Tasks Done</h1>
            <ol>
            <li className="flex justify-between items-center border-gray-500 p-4">Install NodeJs <button className="bg-red-500 hover:bg-red-600  text-white px-4 py-2 rounded-md" onClick={handleDelete}><DeleteIcon /></button></li>
            <li className="flex justify-between items-center p-4 border-gray-500">Install MongoDB <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={handleDelete}><DeleteIcon /></button></li>
            <li className="flex justify-between items-center border-gray-500  p-4">Install NodeJs <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={handleDelete}><DeleteIcon /></button></li>
            <li className="flex justify-between items-center p-4 border-gray-500">Install MongoDB <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={handleDelete}><DeleteIcon /></button></li>
          </ol>
        </div>
      </div>
      <footer>
        <p className="text-center py-4 text-gray-500 text-2xl">Made with ❤️ by <a href="https://github.com/EustacheKamala" className="underline">Eustache Katembo</a></p>

      </footer>
    </div>
  );
}

export default App;
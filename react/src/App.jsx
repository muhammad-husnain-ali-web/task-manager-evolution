import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([]);
  
  const handleAddClick = () => {
    if(task.trim() === '') return;
    const newTask = {
      id: uuidv4(),
      text: task,
      completed: false
    };
    setTasks([...tasks, newTask]);
    console.log("New Task Added:", newTask);
    setTask('');
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) =>{return task.id !== id})
    setTasks(updatedTasks);
  }

  const handleCheked = (id) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks)
  } 


  return (
    <div className="w-[98vw] lg:w-[70vw] mx-auto p-4 flex flex-col items-center">
      <h1 className='text-xl text-center'>Task Manager</h1>
      <p className='py-2 text-center'>Welcome to the Task Manager application!</p>
      <div className="inputDiv w-full flex justify-center gap-2 mb-4">
        <label htmlFor="taskinput" className='w-[50%]' >
          <input value={task} onChange={(e)=>{setTask(e.target.value)}} className='w-full border p-2 rounded-md' type="text" id="taskinput" placeholder="Enter your task here" />
        </label>
          <button onClick={handleAddClick} className='bg-[#6c63ff] rounded-md text-white px-4 py-1 hover:bg-[#574fd6] cursor-pointer' id="addTaskBtn">Add Task</button>
      </div>
      <ul id="taskList" className="taskList m-3 w-full flex flex-col items-center gap-2">
        {/* Task items will be dynamically added here */}
        {tasks.map((task) => (
          <li key={task.id} className={`flex justify-between items-center w-full lg:w-[80%] odd:bg-[#e2e2e2] p-2 rounded-md ${task.completed ? 'line-through text-[#808080]' : ''}`}>
          <span>
            <input onChange={() => handleCheked(task.id)} type="checkbox" name="" id="taskchecked" className='cursor-pointer' />
          </span>
            <span id="taskText" className='w-[70%]'>{task.text}</span>
            <span><button onClick={() => deleteTask(task.id)} className="deletetaskbtn bg-[#ff4d4d] text-white px-3 py-1 rounded-md hover:bg-[#d63a3a] cursor-pointer">Delete</button></span>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default App


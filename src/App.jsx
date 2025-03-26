import './App.css'
import { useState } from 'react';

function App() {
  
  const [taskArray, setTaskArray] = useState([]);
  const [textTask, setTextTask] = useState("");

  const handleChange = (e) => {
    setTextTask(e.target.value);
    console.log(e);
  }

  console.log(taskArray);
  const handleAddTask = () => {
    if (!textTask) return;
    setTaskArray([...taskArray, textTask ]);
    setTextTask("");
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = taskArray.filter((task, i) => 
      i !== index
    );

    setTaskArray(updatedTasks);
  };

  const tasks = taskArray.map((task, index) => {
    return (
      <li key={index}>{task}<button onClick={() => handleDeleteTask(index)}>Delete</button></li>
    )
  });

  return (
    <>
      <input type="text" value={textTask} onChange={handleChange}/>
      <button onClick={handleAddTask}>Add task</button>
      <p>Tareas creadas:</p>
      <ul>
        {tasks}
      </ul>
    </>
  )
}

export default App

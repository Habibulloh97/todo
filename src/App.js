import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Todo from './components/Todo';
import Show from './components/Show';
import { useState } from 'react';


function App() {
  const [listofTasks, setList] = useState([]);
  const addTask = Task =>{
    setList([...listofTasks, Task])
  }
  const updateIsDone = i =>{
    listofTasks[i].isDone=! listofTasks[i].isDone;
    setList([...listofTasks])
  }
  const deleteApp = i =>{
    setList([...listofTasks.slice(0,i),...listofTasks.slice(i+1, listofTasks.length)]);
    console.log(listofTasks)
  }
  return (
    <div className="App">
      <Todo newTask={addTask}/>
      <Show myList={listofTasks} updateStatus={updateIsDone} deleteItem={deleteApp}/>
    </div>
  );
}

export default App;

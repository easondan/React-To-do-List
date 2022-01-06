import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTask";
import { useState } from "react"
import './index.css'
function App() {
  const[show,setShow] = useState(true)
  const [tasks,setTasks] = useState( [
   
])
const deleteTask = (id) =>{
 setTasks(tasks.filter((task)=>task.id!==id))

}

const addTask = (task)=>{
  const id = Math.floor(Math.random()*1000)+1
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
}
  return (
    <div className="container">
      <Header onAdd = {()=>setShow(!show) }showAdd = {show}/>
      {show &&<AddTasks  onAdd = {addTask}/>}
      {tasks.length>0 ?<Tasks onToggle = {toggleReminder}tasks={tasks} onDelete = {deleteTask}></Tasks>:<h3>No Tasks To be Completed</h3>}
    </div>
  );
}

export default App;

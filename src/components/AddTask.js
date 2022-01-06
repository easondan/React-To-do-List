import React from 'react'
import { useState } from 'react'
const AddTasks = ({onAdd}) => {
    const[text,setText] = useState('')
    const[day,setDay] = useState('')
    const[reminder,setReminder] = useState(false)
    const onSubmit = (e)=>{
        e.preventDefault()

        if(!text){
            alert("Please Add a Task")
            return
        }else if(!day){
            alert("Please Add a Day and Time")
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(true)
    }
    return (
        <form className='add-form'onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type = 'text' placeholder='Add Task' value = {text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <label>Day and Time</label>
                <input type = 'text' placeholder='Day and Time' value = {day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className = 'form-control form-control-check'>
                <label>Set Reminder</label>
                <input checked = {reminder} type = 'checkbox' placeholder='Reminder?'  value = {reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input  className='btn btn-block' type = 'submit' value = 'Save Task'></input>
        </form>
    )
}

export default AddTasks

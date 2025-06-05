import React from 'react'

export default function Todoform({task,setTask,addTodo}) {
  return (
   <form onSubmit={addTodo}>
    <input type="text"
    placeholder="Enter task"
    value={task}
    onChange={(e)=>setTask(e.target.value)}
    required>
    </input>
     <button type="submit">Add</button>
   </form>
  )
}


import React from 'react'

const Todoitem = ({todo, toggleTodo, deleteTodo }) =>{
return(
<li style={{ marginTop: "10px"}} >
<input
type="checkbox"
checked={todo.completed}
onChange={() => toggleTodo (todo.id, todo.completed)}
/>
<span style={{textDecoration: todo.completed ? "Line-through" : "none" }}>
(todo. task)
</span>
<button onClick={() => deleteTodo (todo.id)} style={{marginLef: "10px" }}>

</button>
</li>
);
};
export default Todoitem;
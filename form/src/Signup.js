import {useState} from 'react'

const Signup=()=>{

    const [data,setData]=useState({
        name:'',
        email:'',
        password:''
    });

    const handleChange=(e)=>{
       const {name,value}=e.target;
       setData((prevData)=>({
        ...prevData,
        [name]:value
       })); 
    };

     const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Submitted!\nName:${data.name}\nAge:${data.age}\nEmail:${data.email}`);
    };

return(
<div>
    <h2>Signup</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text"
            name="name"
                value={data.name}
                onChange={handleChange} required></input><br/>

            <label>email:</label>
            <input type="text"
            name="email"
                value={data.email}
                onChange={handleChange} required></input><br/>

            <label>Passowrd:</label>
            <input type="password"
            name="password"
                value={data.password}
                onChange={handleChange} required></input><br/>
        </div>
        <button type="submit">submit</button>
    </form>
</div>
);
}
export default Signup;


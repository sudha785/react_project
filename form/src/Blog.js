import {useState} from 'react'
import axios from "axios";
const Blog=()=>{
      const [data,setData]=useState({
             name:'',
             title:'',
             message:''
         });
     
         const handleChange=(e)=>{
            const {name,value}=e.target;
            setData((prevData)=>({
             ...prevData,
             [name]:value
            })); 
         };
     
          const handleSubmit=async(e)=>{
             e.preventDefault();
             
             try {
                    const response = await axios.post("http://localhost:50000/api/blogs",data);
                    alert("Blog submitted successfully!");
                    console.log("Server response:", response.data);
                    setData({ name: '', title:'', message: ''}); // Reset form
                    } 
            catch (error) {
                    console.error("Error submitting blog:", error);
                    alert("Something went wrong!");

}
         };


    return(
<div>
    <h2>Welcome to my Blog</h2>
     <form onSubmit={handleSubmit}>
        <div>
            <label>Author  Name:</label>
            <input type="text"
            name="name"
                value={data.name}
                onChange={handleChange} required></input><br/>

             <label>Title:</label>
            <input type="text"
            name="title"
                value={data.title}
                onChange={handleChange}
             required></input><br/>

             <label>Message:</label>
            <input type="text"
            name="message"
                value={data.message}
                onChange={handleChange}
                 required></input><br/>
        </div>
        <button type="submit">submit</button>
     </form>
</div>
    );
}
export default Blog;
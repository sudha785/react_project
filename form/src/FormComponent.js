import {useState} from 'react'
import axios from "axios";
const FormComponent=()=>{
    const [data,setData]=useState({
        name:'',
        age:'',
        email:''
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
                    const response = await axios.post("http://localhost:5000/api/form",data);
                    alert("form submitted successfully!");
                    console.log("Server response:", response.data);
                    setData({ name: '', age:'', email: ''}); // Reset form
                    } 
            catch (error) {
                    console.error("Error submitting form:", error);
                    alert("Something went wrong!");

}
    };

    return(
        <div>
            <h2>Simple React Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label>
                <input type="text" 
                name="name"
                value={data.name}
                onChange={handleChange}
                required></input><br/>

                <label>age:</label>
                <input type="text"
                name="age"
                value={data.age}
                onChange={handleChange}
                 required></input><br/>

                <label>email:</label>
                <input type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
                 required></input><br/>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}
export default FormComponent;
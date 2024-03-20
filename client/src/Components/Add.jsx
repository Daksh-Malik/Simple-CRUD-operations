import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Add = () => {

  const [employee, setEmployee] = useState({
    name:"",
    age:null,
    country:"",
    position:"",
    wage:null,
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setEmployee((x) => ({...x, [e.target.name]: e.target.value}));
  };

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8080/create", employee)
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <>
    <div>
        Hi this is Add
    </div>
    <div className='form'>
      <h1>Add New Employee</h1>
      <input type="text" placeholder='name' onChange={handleChange} name='name'/>
      <input type="number" placeholder='age' onChange={handleChange} name='age'/>
      <input type="text" placeholder='country' onChange={handleChange} name='country'/>
      <input type="text" placeholder='position' onChange={handleChange} name='position'/>
      <input type="number" placeholder='wage' onChange={handleChange} name='wage'/>
      <button onClick={handleClick}>Add</button>
    </div>
    </>
  )
}

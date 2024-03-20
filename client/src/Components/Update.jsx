import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const Update = () => {

  const [employee, setEmployee] = useState({
    name:"",
    age:null,
    country:"",
    position:"",
    wage:null,
  });

  const navigate = useNavigate()
  const location = useLocation()
  const id = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setEmployee((x) => ({...x, [e.target.name]: e.target.value}));
  };

  const handleClick = async (e) => {
    try{
      await axios.put(`http://localhost:8080/update/${id}`, employee)
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <>
    <div>
      <h1>Update Values</h1>
    </div>
    <div className='form'>
      <input type="text" placeholder='name' onChange={handleChange} name='name'/>
      <input type="number" placeholder='age' onChange={handleChange} name='age'/>
      <input type="text" placeholder='country' onChange={handleChange} name='country'/>
      <input type="text" placeholder='position' onChange={handleChange} name='position'/>
      <input type="number" placeholder='wage' onChange={handleChange} name='wage'/>
      <button onClick={handleClick}>Update</button>
    </div>
    </>
  )
}

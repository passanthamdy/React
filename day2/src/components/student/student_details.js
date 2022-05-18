import React from 'react'
import {useLocation} from 'react-router-dom';
import '../about.css'

function StudentDetails() {
    const location = useLocation();
  return (
    <div>
        <h1 className='title'>Student details</h1>
        <div className='card'> 
        <label>Student ID : {location.state.id} </label> 
        <br></br>
        <label>Student Name : {location.state.name} </label> 
        <br></br>
        <label>Student Age : {location.state.age} </label>

        </div>
    </div>
  )
}

export default StudentDetails
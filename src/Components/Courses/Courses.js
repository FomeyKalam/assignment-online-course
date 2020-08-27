import React from 'react';
import './Courses.css';

const Courses = (props) => {
   const{name,price,img} = props.subjects;
  
    return (
        <div className="course">
        <div className ="courseImg">
            <div>
            <img src={img} alt=""/>
            </div>
        <div className="courseName">
        <h1>{name}</h1>
            <br/>
           <h4>course fee: {price}/-</h4>
        </div>
        </div>
        <br/>
        <div className="d-flex justify-content-start">
        <button className="btn" onClick={()=>props.handleAdd(props.subjects)} >Enroll now</button>
        </div>
        <br/>
        </div>
        
        
       
        
    );
};

export default Courses;
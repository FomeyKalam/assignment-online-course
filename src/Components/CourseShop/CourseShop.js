import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Courses from '../Courses/Courses';
import './CourseShop.css';
import Cart from '../Cart/Cart';

const CourseShop = () => {
   // console.log(fakeData);
    const first15 = fakeData.slice(0,15);
    const[course,setCourse] = useState(first15);
    const[cart,setCart] = useState([]);
    const handleAdd =(course)=>{
        const newCart = [...cart,course];
        setCart(newCart);
    }
    return (
        <div className="shop">
            <div>
            <ul>
                {
                    course.map(subjct => <Courses 
                    subjects ={subjct}
                    handleAdd = {handleAdd} >

                    </Courses>)
                }
            </ul>
            </div>
            <div className="cart">
            <Cart cart = {cart}></Cart>
            </div>
            
           
        </div>
    );
};

export default CourseShop;
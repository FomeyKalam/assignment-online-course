import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    
    let totalCost = cart.reduce((total,subjects)=>total+subjects.price,0);

    return (
        <div className="cart">
             <h3 className="text-center">Purchase Summery</h3>
             <br/>
            <p className="itemNo">Item Placed: {cart.length}</p>
            <br/>
            <p className="cost">Total Amount-{totalCost}</p>

        </div>
    );
};

export default Cart;
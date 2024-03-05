import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delItem } from '../redux/action';
import { Link } from 'react-router-dom';
import photo5 from "../Assets/Cookie.png"

import "../Styles/Cart.css"

    const Cart = () => {
    const state = useSelector((state) => state.addItem);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item));
    };
     
    const emptyCart = () => {
        return (
            <div className='dens'>
            <div className="empty-cart">
                <img src={photo5}></img>
                
               
            </div>
            <h1>Your Cart is Empty</h1>
            </div>
            
        );
    };

    const button = () => {
        return (
            <div className="proceed-button">
                <Link to="/checkout">Proceed To Checkout</Link>
            </div>
        );
    };

    return (
        <>
        {/* <div className='full-cart'>
        <div className='carts'> */}
        <div className="cart-container">
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map((cartItem)=>(
                <div className="cart-item" key={cartItem.id}>
         
                <div className="item-details">
                    <img  height='300px' width='300px'  src={cartItem.img} alt={cartItem.title} />
                    <div>
                        <h3>{cartItem.title}</h3>
                        <p className="price">Rs {cartItem.price}</p>
                </div>
                </div>
            
                <button onClick={() => handleClose(cartItem)} >Remove </button>
               
             </div>
            ))}
            
        </div>
            
            
    {/* </div> */}
            <div>
            {state.length != 0 && button()}
            </div>
            {/* </div> */}
            </>
            );
  
   
};

export default Cart;

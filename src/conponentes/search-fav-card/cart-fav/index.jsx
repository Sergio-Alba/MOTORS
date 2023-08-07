/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import './style.css'
import { CartContext } from "../../context/cart-context";
import {  useNavigate } from "react-router-dom";


const CartFavLogin = ()=>{
    const {cart}= useContext(CartContext);
    const navigate = useNavigate()

    const goToCart = ()=>{
        navigate('/cart');
    }
    
    const goTofav = ()=>{
        navigate('/fav');
    }
    const goToLogin = ()=>{
        navigate('/login');
    }

    return(
        <div className="contain-card-fav">
            <div className="div-cart">
                <ul className="menu-cart">
                    <button className="item-cart" onClick={goToCart}>
                        <i className="bi bi-cart"></i>
                        <span>{cart.length}</span>
                    </button>
                    <button className="item-cart" onClick={goTofav}> 
                        <i className="bi bi-star"></i>
                        <span>0</span>
                    </button>
                    <button className="item-cart"onClick={goToLogin}>
                        <i className="bi bi-person"></i>
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default CartFavLogin
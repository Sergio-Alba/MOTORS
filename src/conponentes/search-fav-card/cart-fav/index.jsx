/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import './style.css'


const Cart = ()=>{

    const [p, setProd]= useState(0)
    const [ f , setFav] = useState(0)
    return(
        <div className="contain-card-fav">
            <div className="div-cart">
                <input type="checkbox" className="open-carts" id="open-carts" />
                <label htmlFor="open-carts" className="btn-cart">
                    <i className="bi bi-caret-left"></i>
                </label>
                <ul className="menu-cart">
                    <button className="item-cart" onClick={()=> setProd((p)=>p + 1)}>
                        <i className="bi bi-cart"></i>
                        <span>{p}</span>
                    </button>
                    <button className="item-cart" onClick={()=> setFav((f)=>f + 1)}>
                        <i className="bi bi-star"></i>
                        <span>{f}</span>
                    </button>
                    <li className="item-cart"> <a href="#" ><i className="bi bi-person"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Cart
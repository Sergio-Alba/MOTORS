/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import './style.css'


const CartFavLogin = ()=>{

    const [p, setProd]= useState(0)
    const [ f , setFav] = useState(0)


    return(
        <div className="contain-card-fav">
            <div className="div-cart">
                <ul className="menu-cart">
                    <button className="item-cart" onClick={()=> setProd((p)=>p + 1)}>
                        <i className="bi bi-cart"></i>
                        <span>{p}</span>
                    </button>
                    <button className="item-cart" onClick={()=> setFav((f)=>f + 1)}>
                        <i className="bi bi-star"></i>
                        <span>{f}</span>
                    </button>
                    <button className="item-cart">
                        <a href="#" ><i className="bi bi-person"></i></a>
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default CartFavLogin
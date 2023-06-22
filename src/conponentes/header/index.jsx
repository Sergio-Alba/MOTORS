
import React, { useState } from "react"; 
import './style.css';


const Header = ({ logo , menuItem})=>{
    return(
        <header className="header">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="side-menu " id="side-menu"/>
            <label htmlFor="side-menu" className="hamb">
                <span className="hamb-line1"></span>
                <span className="hamb-line2"></span>
                <span className="hamb-line3"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">contacto</a></li>
                </ul>
            </nav>
            <Cart/>
        </header>
    )
};

const Cart = ()=>{

    const [p, setProd]= useState(0)
    const [ f , setFav] = useState(0)
    return(
        <section className="section-cart">
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
        </section>
    )
}



export default Header;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './style.css';
import React, { useContext, useState } from "react"; 
import {Link, NavLink} from 'react-router-dom';
import { CartContext } from '../context/cart-context';


const Header = ({ logo })=>{
    return(
        <header className="header">
            <NavLink to={'/'}  className="logo">{logo}</NavLink>
            <input type="checkbox" className="side-menu " id="side-menu"/>
            <label htmlFor="side-menu" className="hamb">
                <span className="hamb-line1"></span>
                <span className="hamb-line2"></span>
                <span className="hamb-line3"></span>
            </label>
            <nav className="nav">
                <ul className="menu">
                    <Link  to="/"><li>Inicio</li></Link> 
                    <Link  to="/products/"><li>Productos</li></Link>
                    <Link  to="/about"><li>Sobre Nosotros</li></Link>
                    <Link  to="/contact"><li>Contacto</li></Link>
                </ul>
            </nav>
        </header>
    )
};



export default Header;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './style.css';
import React, { useContext, useState } from "react"; 
import {Link, NavLink} from 'react-router-dom';
import { CartContext } from '../context/cart-context';


const Header = ({ logo , menuItem})=>{
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
                    <li> <Link  to="/">Inicio</Link> </li>
                    <li><Link  to="/products/">Productos</Link></li>
                    <li><Link  to="/about">Sobre Nosotros</Link></li>
                    <li><Link  to="/contact">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    )
};



export default Header;

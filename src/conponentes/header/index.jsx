/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

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
        </header>
    )
};



export default Header;

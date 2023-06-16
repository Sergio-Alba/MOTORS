/* eslink disble react/no-unescaped-entities */
import React from "react"; 
import './style.css';


const Header = ({ logo , menuItem})=>{
    return(
        <header className="header">
            <a href="/" className="logo">{logo}</a>
            <input type="checkbox" className="side-menu " id="side-menu"/>
            <label htmlFor="side-menu" className="hamb">
                <span className="hamb-line"></span>
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

// import React from "react"; 
import './style.css';

const Header = ()=>{
    return(
        <Header className="header">
            <a href="/" className="logo">Sa´c</a>
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
        </Header>
    )
}


export default Header;

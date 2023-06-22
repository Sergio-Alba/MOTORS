
import React, {useState} from "react"
import './style.css'


const ItemListContainer = ({greeting, descripcion})=>{
    return(
        <main className="main-container">
            <h1 className="main-title">{greeting}</h1>
            <p className="main-descripcion">{descripcion}</p>
        </main>
    )
};




export default ItemListContainer;

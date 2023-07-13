/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react"
import './style'


const ItemListContainer = (greeting)=>{
    return(
        <main className="main-container">
            <h1 className="main-title">{greeting}</h1>
        </main>
    )
};




export default ItemListContainer;

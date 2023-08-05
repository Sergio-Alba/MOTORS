/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import './style.css';

const Input = ({id,
                type = Text,
                placeholder,
                required,
                name,
                onChange,
                onFocus,
                onBlur,
                value
                    })=>{
    return(
        <section className="search">
            <label htmlFor={id}>
                {name}
            </label>
            <input 
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                name
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
            />
            
        </section>
    )
}

export default Input;
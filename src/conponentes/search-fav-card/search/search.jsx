/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import './style.css';

const Input = ({id,
                type = Text,
                placeholder,
                required,
                name,
                label,
                onChange,
                onFocus,
                onBlur,
                value,
                active,
                error,
                hasError,
                    })=>{
    return(
        <section className="search">
            <label htmlFor={id}>
                {label}
            </label>
            <input 
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                name={name}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
            />
            {hasError && (
                <span className="input-error">{error}</span>
            )}
        </section>
    )
}

export default Input;
import React, { useState } from 'react'

const Input = ({ type, text, name, value, onChange, className, classNameInput }) => {
    return (
        <div className={`font-bold ${className}`}>
            <h1 className='text-black py-2'>{`${text}`}</h1>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={type === "tel" ? "+375 (29) 123-12-12" : ""}
                className={`w-full ${classNameInput} outline-none focus:outline-amber-500 transition-all duration-300 text-gray-800 px-1 py-2 bg-slate-200 rounded`}
            />
        </div>
    )
}

export default Input;
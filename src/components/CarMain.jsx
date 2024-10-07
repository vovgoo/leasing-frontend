import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CarMain = (cars) => {

    const handleClick = () => {
        window.scrollTo(0, 0); 
    };

    return (
        <div className='w-96 shadow-cards rounded-xl overflow-hidden'>
            <div className='w-full h-52 overflow-hidden'>
                <img src="/images/main.jpg" className='object-center object-contain' alt="1" />
            </div>

            <div className='w-full bg-white flex flex-col px-5 py-5'>
                <h1 className='font-bold text-xl'>{cars.data.make + " " + cars.data.model}</h1>
                <h1 className='font-semibold text-gray-500 text-sm'>{cars.data.make + " - Год выпуска " + cars.data.year}</h1>
            </div>

            <div className='w-full flex flex-col bg-white font-bold text-sm px-5 gap-y-2'>
                <div className='flex justify-between w-full'>
                    <h1>Год выпуска</h1>
                    <h1>{cars.data.year}</h1>
                </div>

                <div className='flex justify-between w-full'>
                    <h1>Пробег</h1>
                    <h1>{cars.data.mileage}</h1>
                </div>

                <div className='flex justify-between w-full'>
                    <h1>Цвет</h1>
                    <h1>{cars.data.color}</h1>
                </div>
            </div>

            <div className='w-full bg-white px-5 pb-5 pt-10 flex justify-between items-center flex-col gap-y-5'>
                <h1 className='font-bold text-2xl'>${cars.data.price}/час</h1>
                <Link to={`/car/${cars.data.id}`} onClick={handleClick} className='cursor-pointer rounded-xl px-5 py-2 text-sm w-full text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Подробнее</Link>
            </div>
        </div>
    )
}

export default CarMain;
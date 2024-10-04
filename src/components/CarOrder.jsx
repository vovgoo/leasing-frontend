import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const statusColors = {
    PENDING: 'bg-yellow-500',
    ACTIVE: 'bg-green-500',
    COMPLETED: 'bg-blue-500',
    CANCELED: 'bg-red-500',
};

const statusTexts = {
    PENDING: 'В процессе',
    ACTIVE: 'Активный',
    COMPLETED: 'Завершен',
    CANCELED: 'Отменен',
};

const CarOrder = ({ orderId, startData, endDate, car, rentalsStatus, id }) => {

    const color = statusColors[rentalsStatus];
    const text = statusTexts[rentalsStatus];

    return (
        <div className='w-full bg-white shadow-cards py-5 px-5 rounded-lg font-bold flex gap-x-10'>
            <div className='flex items-center w-1/12'>
                <h1 className='w-full bg-black text-white text-center py-2 rounded-xl'>{orderId}</h1>
            </div>
            <div className='flex flex-col gap-x-5 w-6/12'>
                <div className=''>
                    <h1>Дата: {startData} - {endDate}</h1>
                    <h1>Машина: {car}</h1>
                </div>
            </div>
            <div className='flex items-center gap-x-3 w-3/12'>
                <h1>Статус: {text}</h1>
                <div className={`w-3 h-3 ${color} rounded-full`}></div>
            </div>
            <div className='flex items-center justify-center w-2/12'>
                <Link to={`/order/${id}`} type='sumbit' className='w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Детали заказа</Link>
            </div>
        </div>
    )
}

export default CarOrder;
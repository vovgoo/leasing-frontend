import React, { useState, useEffect } from 'react'
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const statusColors = {
    PROCESS: 'bg-yellow-500',
    SUCCESS: 'bg-green-500',
    PLANNED: 'bg-blue-500',
};

const statusTexts = {
    PROCESS: 'В процессе',
    SUCCESS: 'Завершен',
    PLANNED: 'Запланирован',
};

const CarMainteance = ({ id, startDate, endDate, serviceName}) => {
    
    const [color, setColor] = useState(null);
    const [text, setText] = useState(null);

    useEffect(() => {
        const currentDate = Date.now();

        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();

        if (currentDate > end) {
            setColor(statusColors.SUCCESS);
            setText(statusTexts.SUCCESS);
        } else if (currentDate < start) {
            setColor(statusColors.PLANNED);
            setText(statusTexts.PLANNED);
        } else if (currentDate >= start && currentDate <= end) {
            setColor(statusColors.PROCESS);
            setText(statusTexts.PROCESS);
        }
        console.log(start);
        console.log(end);
        console.log(currentDate);
        console.log(color);
    }, [startDate, endDate]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "d MMMM yyyy HH:mm:ss", { locale: ru });
    };
    
    return (
        <div className='w-full bg-white shadow-cards py-5 px-5 rounded-lg font-bold flex gap-x-10'>
            <div className='flex items-center w-1/12'>
                <h1 className='w-full bg-black text-white text-center py-2 rounded-xl'>{id}</h1>
            </div>
            <div className='flex flex-col gap-x-5 w-6/12'>
                <div className=''>
                    <h1>Дата: {formatDate(startDate)} - {formatDate(endDate)}</h1>
                    <h1>Сервис: {serviceName}</h1>
                </div>
            </div>
            <div className='flex items-center gap-x-3 w-5/12 justify-center'>
                <h1>Статус: {text}</h1>
                <div className={`w-3 h-3 ${color} rounded-full`}></div>
            </div>
        </div>
    )
}

export default CarMainteance;
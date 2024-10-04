import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import CountdownTimer from '../components/CountdownTimer';

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

const OrderDetails = () => {
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "d MMMM yyyy HH:mm:ss", { locale: ru });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/api/v1/users/order?id=${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className={`pt-32 pb-10 px-10`}>
            <div className='p-5 rounded-md h-full w-full flex bg-white shadow-cars gap-x-5'>
                <div className='flex flex-col w-1/4 items-center'>
                    <h1 className='font-bold w-full text-center mb-5 text-lg'>Машина которую вы брали в аренду</h1>
                    <div className='w-96 shadow-cards rounded-xl overflow-hidden'>
                        <div className='w-full h-52 overflow-hidden'>
                            <img src="/images/main.jpg" className='object-center object-contain' alt="1" />
                        </div>
                        
                        <div className='w-full bg-white flex flex-col px-5 py-5'>
                            <h1 className='font-bold text-xl'>{data && data.payments.rentals.cars.make + " " + data.payments.rentals.cars.model}</h1>
                            <h1 className='font-semibold text-gray-500 text-sm'>{data && data.payments.rentals.cars.make + " - Год выпуска " + data.payments.rentals.cars.year}</h1>
                        </div>

                        <div className='w-full flex flex-col bg-white font-bold text-sm px-5 gap-y-2'>
                            <div className='flex justify-between w-full'>
                                <h1>Год выпуска</h1>
                                <h1>{data && data.payments.rentals.cars.year}</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Пробег</h1>
                                <h1>{data && data.payments.rentals.cars.mileage} км</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Цвет</h1>
                                <h1>{data && data.payments.rentals.cars.color}</h1>
                            </div>
                        </div>

                        <div className='w-full bg-white px-5 pb-5 pt-10 flex justify-between items-center flex-col gap-y-5'>
                            <h1 className='font-bold text-2xl'>${data && data.payments.rentals.cars.price}/час</h1>
                            <h1 className='cursor-pointer rounded-xl px-5 py-2 text-sm w-full text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Подробнее</h1>
                        </div>
                    </div>
                </div>
                
                <div className='w-2/4 bg-white font-bold flex flex-col justify-between px-10'>
                    <div>
                        <h1 className='font-bold w-full text-center mb-5 text-lg'>Общая информация</h1>
                        <div className='flex flex-col gap-y-5'>
                            <div className='flex justify-between'>
                                <h1>Дата начала:</h1>
                                <h1>{data && formatDate(data.payments.rentals.startDate)}</h1>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Дата конца:</h1> 
                                <h1>{data && formatDate(data.payments.rentals.endDate)}</h1>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Машина:</h1>
                                <h1>{data && data.payments.rentals.cars.make + " " + data.payments.rentals.cars.model + " " + data.payments.rentals.cars.year}</h1>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Статус аренды:</h1>
                                <div className='flex items-center justify-center'>
                                    <h1 className='mr-3'>{data && statusTexts[data.payments.rentals.rentalsStatus]}</h1>
                                    <div className={`w-3 h-3 ${data && statusColors[data.payments.rentals.rentalsStatus]} rounded-full`}></div>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <h1>Общая сумма:</h1> 
                                <h1>{data && data.payments.amount}$</h1> 
                            </div>
                            <div className='flex justify-between'>
                                <h1>Метод оплаты:</h1> 
                                <h1>{data && data.payments.paymentMethod}</h1> 
                            </div>   
                        </div>
                    </div>    
                    <CountdownTimer endDate={data && data.payments.rentals.endDate}/>
                    {data && new Date(data.payments.rentals.endDate) - new Date() > 0 && (
                        <div>
                            <button className='w-full py-2 bg-black rounded-lg text-white transition-all duration-300 hover:bg-amber-500 hover:text-black'>Завершить аренду</button>
                        </div>
                    )}
                </div>

                <div className='w-1/4 flex flex-col'>
                    <h1 className='font-bold w-full text-center mb-5 text-lg'>Ваш чек</h1>
                    <div className='shadow-cars w-full h-full px-10 py-5 flex flex-col font-bold'>
                        <h1 className='font-bold w-full text-center text-lg'>ORDER #{data && data.payments.id} FOR {data && data.payments.rentals.user.firstName}</h1>
                        <hr className='my-5'/>
                        <div className='w-full h-full flex flex-col gap-y-5'>
                            <div className='w-full flex justify-between'>
                                <h1>{data && data.payments.rentals.cars.make + " " + data.payments.rentals.cars.model + " " + data.payments.rentals.cars.year}</h1>
                                <h1>{data && data.payments.amount * 0.6}$</h1>
                            </div>
                            <hr/>
                            <div className='w-full flex justify-between'>
                                <h1>Бензин</h1>
                                <h1>{data && data.payments.amount * 0.2}$</h1>
                            </div>
                            <hr/>
                            <div className='w-full flex justify-between'>
                                <h1>Техническое обслуживание</h1>
                                <h1>{data && data.payments.amount * 0.2}$</h1>
                            </div>
                        </div>
                        <hr className='my-5'/>
                        <div className='flex w-full justify-between'>
                            <h1>ИТОГО:</h1>
                            <h1>{data && data.payments.amount}$</h1>
                        </div>
                        <hr className='my-5'/>
                        <div className='flex w-full justify-between'>
                            <h1>OPERATION TYPE: </h1>
                            <h1>{data && data.payments.paymentMethod}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CarMain from '../components/CarMain';

const MainPage = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/api/v1/cars/mainPage`);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-full flex flex-col'>
            <div className='w-full max-h-dvh overflow-hidden'>
                <div className='w-full relative overflow-hidden'>
                    <div className='absolute gap-y-5 flex flex-col items-center justify-center w-full h-full z-20 -translate-y-60'>
                        <span className='text-black font-bold text-4xl'>Легкий способ арендовать машину!</span>
                        <span className='text-black text-xl font-medium'>Получите вашу машину в пару кликов.</span>
                        <div className='w-1/2 bg-white rounded-xl gap-x-5 px-5 py-4 flex items-center justify-center mt-28 border-gray-300 border-4'>
                            <input placeholder='Введите модель машины для поиска' className='h-full outline-none w-full font-bold'></input>
                            <div className='group transition-all duration-300 hover:bg-amber-500 h-16 w-16 min-w-16 min-h-16 bg-black rounded-xl flex items-center justify-center cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                                    <path className='stroke-white transition-all duration-300 group-hover:stroke-black' d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='absolute h-full w-full main-image-gradient z-10'></div>
                    <img src="/images/main.jpg" className='w-full h-full object-cover -translate-y-20' alt="Main" />
                </div>
            </div>
            <div className='w-full h-32 flex justify-around items-center px-20 shadow-md'>
                <img src='/images/car1.png' className='h-20 opacity-70' alt='' />
                <img src='/images/car2.png' className='h-20 opacity-70' alt='' />
                <img src='/images/car3.png' className='h-20 opacity-70' alt='' />
                <img src='/images/car4.png' className='h-20 opacity-70' alt='' />
            </div>
            <div className='w-full px-20 py-20 flex flex-col gap-y-5'>
                <h1 className='font-bold text-2xl w-full text-center'>Выберите нужную вам категорию машин</h1>

                <div className='flex justify-around py-10'>
                    <div className='bg-white hover:shadow-cars transition-all duraiton-300 rounded-xl w-72 h-80 flex flex-col justify-center items-center'>
                        <div className='h-1/2 px-10 flex items-center justify-center pt-5'>
                            <img src="/images/cars1.png" className='w-full' alt="" />
                        </div>
                        <div className='flex w-full h-1/2 flex-col items-center justify-around'>
                            <h1 className='font-bold text-xl'>Эконом класс</h1>
                            <h1 className='cursor-pointer rounded-full font-semibold bg-gray-200 px-5 py-2 text-sm w-28 text-center text-gray-800 transition-all hover:bg-black hover:text-white duration-300'>18 машин</h1>
                        </div>
                    </div>

                    <div className='bg-white hover:shadow-cars transition-all duraiton-300 rounded-xl w-72 h-80 flex flex-col justify-center items-center'>
                        <div className='h-1/2 px-10 flex items-center justify-center pt-5'>
                            <img src="/images/cars2.png" className='w-full' alt="" />
                        </div>
                        <div className='flex w-full h-1/2 flex-col items-center justify-around'>
                            <h1 className='font-bold text-xl'>Средний класс</h1>
                            <h1 className='cursor-pointer rounded-full font-semibold bg-gray-200 px-5 py-2 text-sm w-28 text-center text-gray-800 transition-all hover:bg-black hover:text-white duration-300'>18 машин</h1>
                        </div>
                    </div>

                    <div className='bg-white hover:shadow-cars transition-all duraiton-300 rounded-xl w-72 h-80 flex flex-col justify-center items-center'>
                        <div className='h-1/2 px-10 flex items-center justify-center pt-5'>
                            <img src="/images/cars3.png" className='w-full' alt="" />
                        </div>
                        <div className='flex w-full h-1/2 flex-col items-center justify-around'>
                            <h1 className='font-bold text-xl'>Премиум класс</h1>
                            <h1 className='cursor-pointer rounded-full font-semibold bg-gray-200 px-5 py-2 text-sm w-28 text-center text-gray-800 transition-all hover:bg-black hover:text-white duration-300'>18 машин</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-20 shadow-cars flex items-center justify-center'>
                <h1 className='font-bold text-2xl'>vovgoo dev.</h1>
            </div>

            <div className='w-full px-20 py-20'>
                <h1 className='font-bold text-2xl text-center mb-3'>Наиболее популярные модели машин</h1>
                <h1 className='text-gray-600 text-center'>Выберите ту которая подходит именно вам!</h1>

                <div className='w-full flex flex-wrap gap-5 gap-y-10 px-20 mt-10 justify-around py-5'>

                    {data && data.cars && (data.cars.map((car) => (
                        <CarMain data={car} />
                    )))}

                </div>

                <div className='w-full flex items-center justify-center mt-32'>
                </div>
            </div>
        </div>

    )
}

export default MainPage;
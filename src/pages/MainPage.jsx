import React from 'react'

const MainPage = () => {
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
                                <path className='stroke-white transition-all duration-300 group-hover:stroke-black' d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='absolute h-full w-full main-image-gradient z-10'></div>
                    <img src="/images/main.jpg" className='w-full h-full object-cover -translate-y-20' alt="Main" />
                </div>
            </div>
            <div className='w-full h-32 flex justify-around items-center px-20 shadow-md'>
                <img src='/images/car1.png' className='h-20 opacity-70' alt=''/>
                <img src='/images/car2.png' className='h-20 opacity-70' alt=''/>
                <img src='/images/car3.png' className='h-20 opacity-70' alt=''/>
                <img src='/images/car4.png' className='h-20 opacity-70' alt=''/>
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

                    <div className='w-96 shadow-cards rounded-xl overflow-hidden'>
                        <div className='w-full h-52 overflow-hidden'>
                            <img src="/images/main.jpg" className='object-center object-contain' alt="1" />
                        </div>
                        
                        <div className='w-full bg-white flex flex-col px-5 py-5'>
                            <h1 className='font-bold text-xl'>2019 Audi S4 Premium Plus</h1>
                            <h1 className='font-semibold text-gray-500 text-sm'>BMV - Model year 2021</h1>
                        </div>

                        <div className='w-full flex flex-col bg-white font-bold text-sm px-5 gap-y-2'>
                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                        </div>

                        <div className='w-full bg-white px-5 pb-5 pt-10 flex justify-between items-center flex-col gap-y-5'>
                            <h1 className='font-bold text-2xl'>$138.00/час</h1>
                            <h1 className='cursor-pointer rounded-xl px-5 py-2 text-sm w-full text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Подробнее</h1>
                        </div>
                    </div>

                    <div className='w-96 shadow-cards rounded-xl overflow-hidden'>
                        <div className='w-full h-52 overflow-hidden'>
                            <img src="/images/main.jpg" className='object-center object-contain' alt="1" />
                        </div>
                        
                        <div className='w-full bg-white flex flex-col px-5 py-5'>
                            <h1 className='font-bold text-xl'>2019 Audi S4 Premium Plus</h1>
                            <h1 className='font-semibold text-gray-500 text-sm'>BMV - Model year 2021</h1>
                        </div>

                        <div className='w-full flex flex-col bg-white font-bold text-sm px-5 gap-y-2'>
                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                        </div>

                        <div className='w-full bg-white px-5 pb-5 pt-10 flex justify-between items-center flex-col gap-y-5'>
                            <h1 className='font-bold text-2xl'>$138.00/час</h1>
                            <h1 className='cursor-pointer rounded-xl px-5 py-2 text-sm w-full text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Подробнее</h1>
                        </div>
                    </div>

                    <div className='w-96 shadow-cards rounded-xl overflow-hidden'>
                        <div className='w-full h-52 overflow-hidden'>
                            <img src="/images/main.jpg" className='object-center object-contain' alt="1" />
                        </div>
                        
                        <div className='w-full bg-white flex flex-col px-5 py-5'>
                            <h1 className='font-bold text-xl'>2019 Audi S4 Premium Plus</h1>
                            <h1 className='font-semibold text-gray-500 text-sm'>BMV - Model year 2021</h1>
                        </div>

                        <div className='w-full flex flex-col bg-white font-bold text-sm px-5 gap-y-2'>
                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                        </div>

                        <div className='w-full bg-white px-5 pb-5 pt-10 flex justify-between items-center flex-col gap-y-5'>
                            <h1 className='font-bold text-2xl'>$138.00/час</h1>
                            <h1 className='cursor-pointer rounded-xl px-5 py-2 text-sm w-full text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Подробнее</h1>
                        </div>
                    </div>

                    <div className='w-96 shadow-cards rounded-xl overflow-hidden'>
                        <div className='w-full h-52 overflow-hidden'>
                            <img src="/images/main.jpg" className='object-center object-contain' alt="1" />
                        </div>
                        
                        <div className='w-full bg-white flex flex-col px-5 py-5'>
                            <h1 className='font-bold text-xl'>2019 Audi S4 Premium Plus</h1>
                            <h1 className='font-semibold text-gray-500 text-sm'>BMV - Model year 2021</h1>
                        </div>

                        <div className='w-full flex flex-col bg-white font-bold text-sm px-5 gap-y-2'>
                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                        </div>

                        <div className='w-full bg-white px-5 pb-5 pt-10 flex justify-between items-center flex-col gap-y-5'>
                            <h1 className='font-bold text-2xl'>$138.00/час</h1>
                            <h1 className='cursor-pointer rounded-xl px-5 py-2 text-sm w-full text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Подробнее</h1>
                        </div>
                    </div>

                    <div className='w-96 shadow-cards rounded-xl overflow-hidden'>
                        <div className='w-full h-52 overflow-hidden'>
                            <img src="/images/main.jpg" className='object-center object-contain' alt="1" />
                        </div>
                        
                        <div className='w-full bg-white flex flex-col px-5 py-5'>
                            <h1 className='font-bold text-xl'>2019 Audi S4 Premium Plus</h1>
                            <h1 className='font-semibold text-gray-500 text-sm'>BMV - Model year 2021</h1>
                        </div>

                        <div className='w-full flex flex-col bg-white font-bold text-sm px-5 gap-y-2'>
                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                        </div>

                        <div className='w-full bg-white px-5 pb-5 pt-10 flex justify-between items-center flex-col gap-y-5'>
                            <h1 className='font-bold text-2xl'>$138.00/час</h1>
                            <h1 className='cursor-pointer rounded-xl px-5 py-2 text-sm w-full text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Подробнее</h1>
                        </div>
                    </div>

                    <div className='w-96 shadow-cards rounded-xl overflow-hidden'>
                        <div className='w-full h-52 overflow-hidden'>
                            <img src="/images/main.jpg" className='object-center object-contain' alt="1" />
                        </div>
                        
                        <div className='w-full bg-white flex flex-col px-5 py-5'>
                            <h1 className='font-bold text-xl'>2019 Audi S4 Premium Plus</h1>
                            <h1 className='font-semibold text-gray-500 text-sm'>BMV - Model year 2021</h1>
                        </div>

                        <div className='w-full flex flex-col bg-white font-bold text-sm px-5 gap-y-2'>
                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                        </div>

                        <div className='w-full bg-white px-5 pb-5 pt-10 flex justify-between items-center flex-col gap-y-5'>
                            <h1 className='font-bold text-2xl'>$138.00/час</h1>
                            <h1 className='cursor-pointer rounded-xl px-5 py-2 text-sm w-full text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Подробнее</h1>
                        </div>
                    </div>

                    <div className='w-96 shadow-cards rounded-xl overflow-hidden'>
                        <div className='w-full h-52 overflow-hidden'>
                            <img src="/images/main.jpg" className='object-center object-contain' alt="1" />
                        </div>
                        
                        <div className='w-full bg-white flex flex-col px-5 py-5'>
                            <h1 className='font-bold text-xl'>2019 Audi S4 Premium Plus</h1>
                            <h1 className='font-semibold text-gray-500 text-sm'>BMV - Model year 2021</h1>
                        </div>

                        <div className='w-full flex flex-col bg-white font-bold text-sm px-5 gap-y-2'>
                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                            <div className='flex justify-between w-full'>
                                <h1>Параметр</h1>
                                <h1>Тип</h1>
                            </div>

                        </div>

                        <div className='w-full bg-white px-5 pb-5 pt-10 flex justify-between items-center flex-col gap-y-5'>
                            <h1 className='font-bold text-2xl'>$138.00/час</h1>
                            <h1 className='cursor-pointer rounded-xl px-5 py-2 text-sm w-full text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Подробнее</h1>
                        </div>
                    </div>

                </div>
                
                <div className='w-full flex items-center justify-center mt-32'>
                                    </div>
            </div>
        </div>

    )
}

export default MainPage;
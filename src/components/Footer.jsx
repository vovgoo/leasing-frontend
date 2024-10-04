import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full flex-end flex flex-col bg-black'>
            <div className='flex w-full justify-between pt-20 pb-10 px-20'>
                
                <div className='flex-col w-1/3 flex gap-y-5 justify-center'>
                    <Link to={"/"} className='flex items-center gap-x-5'>
                        <img src="/images/logo.png" className='h-10 invert' alt="" />
                        <span className='font-bold text-xl text-white'>vovgoo dev.</span>
                    </Link>
                    <div className='w-full'>
                        <span className='text-white select-none'>Лучший сервис по аренде авто. Вы можете нам доверять.</span>
                    </div>
                </div>

                <div className='text-white w-1/3 flex flex-col'>
                    <ul className='flex flex-col gap-y-3 items-center'>
                        <li className='font-bold mb-2'>Навигация</li>
                        <Link to={"/contacts"} className='transition-all duration-300 hover:text-amber-500 cursor-pointer'>Наши контакты</Link>
                        <Link to={"/search"} className='transition-all duration-300 hover:text-amber-500 cursor-pointer'>Все машины</Link>
                        <Link to={"/support"} className='transition-all duration-300 hover:text-amber-500 cursor-pointer'>Поддержка</Link>
                    </ul>
                </div>

                <div className='text-white w-1/3 flex flex-col'>
                    <ul className='flex flex-col gap-y-3 items-center'>
                        <li className='font-bold mb-2'>Наши контакты</li>
                        <li>Справочный центр: ул. Гагарина 41А</li>
                        <li>Email: vovgoo@example.com</li>
                        <li>Номер телефона: +375 (32) 812-81-12</li>
                    </ul>
                </div>

            </div>
            
            <div className='h-full w-full flex items-center justify-center bg-black'>
                <span className='text-white py-10 select-none'>Все права защищены. 2024</span>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({location}) => {

    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <div className={`w-full flex justify-between items-center h-20 px-10 absolute bg-white z-50 ${isAuthPage ? 'shadow-md' : ''}`}>
            <Link to={"/"} className='flex items-center gap-x-5 w-1/4'>
                <img src="./images/logo.png" className='h-10' alt="" />
                <span className='font-bold text-xl'>vovgoo dev.</span>
            </Link>
            <div className='w-2/4'>
                <ul className='flex justify-center items-center font-bold gap-x-5'>
                    <li className='cursor-pointer select-none hover:text-amber-500 duration-300 transition-all'>Все машины</li>
                    <li className='cursor-pointer select-none hover:text-amber-500 duration-300 transition-all'>Наши контакты</li>
                    <li className='cursor-pointer select-none hover:text-amber-500 duration-300 transition-all'>Поддержка</li>
                </ul>
            </div>
            <div className='flex w-1/4 justify-end'>
                <ul className='flex items-center justify-center gap-x-5'>
                    <li className='group'>
                        <Link className='flex items-center justify-center gap-x-3 cursor-pointer select-none'>
                            <span className='font-bold group-hover:text-amber-500 duration-300 transition-all'>Корзина</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" className='group-hover:stroke-amber-500 stroke-black duration-300 transition-all' viewBox="0 0 24 24" fill="none">
                            <path d="M20 10L18.5145 17.4276C18.3312 18.3439 18.2396 18.8021 18.0004 19.1448C17.7894 19.447 17.499 19.685 17.1613 19.8326C16.7783 20 16.3111 20 15.3766 20H8.62337C7.6889 20 7.22166 20 6.83869 19.8326C6.50097 19.685 6.2106 19.447 5.99964 19.1448C5.76041 18.8021 5.66878 18.3439 5.48551 17.4276L4 10M20 10H18M20 10H21M4 10H3M4 10H6M6 10H18M6 10L9 4M18 10L15 4M9 13V16M12 13V16M15 13V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <script xmlns=""/></svg>
                        </Link>
                    </li>
                    <li className='group'>
                        <Link to={"/login"} className='flex items-center justify-center gap-x-3 cursor-pointer select-none'>
                            <span className='font-bold group-hover:text-amber-500 duration-300 transition-all'>Войти</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className='group-hover:stroke-amber-500 stroke-black duration-300 transition-all' width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <script xmlns=""/></svg> 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
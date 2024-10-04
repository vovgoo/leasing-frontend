import React from 'react'
import { Link } from 'react-router-dom';
import { isAuthenticated, useAuth } from "../AuthProvider"

const Header = ({location}) => {

    const { isAuthenticated } = useAuth();

    const isAuthPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/personal' || location.pathname === '/contacts';

    return (
        <div className={`w-full flex justify-between items-center h-20 px-10 absolute bg-white z-50 ${isAuthPage ? 'shadow-md' : ''}`}>
            <Link to={"/"} className='flex items-center gap-x-5 w-1/4'>
                <img src="/images/logo.png" className='h-10' alt="" />
                <span className='font-bold text-xl'>vovgoo dev.</span>
            </Link>
            <div className='w-2/4'>
                <ul className='flex justify-center items-center font-bold gap-x-5'>
                    <Link to={"/search"} className='cursor-pointer select-none hover:text-amber-500 duration-300 transition-all'>Все машины</Link>
                    <Link to={"/contacts"} className='cursor-pointer select-none hover:text-amber-500 duration-300 transition-all'>Наши контакты</Link>
                    <Link to={"/support"} className='cursor-pointer select-none hover:text-amber-500 duration-300 transition-all'>Поддержка</Link>
                </ul>
            </div>
            <div className='flex w-1/4 justify-end'>
                <ul className='flex items-center justify-center gap-x-5'>
                    {isAuthenticated && 
                    <li className='group'>
                        <Link to={"/personal"} className='flex items-center justify-center gap-x-3 cursor-pointer select-none'>
                            <span className='font-bold group-hover:text-amber-500 duration-300 transition-all'>Кабинет</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                            <path  className='group-hover:stroke-amber-500 stroke-black duration-300 transition-all' d="M11 21H5.6C5.03995 21 4.75992 21 4.54601 20.891C4.35785 20.7951 4.20487 20.6422 4.10899 20.454C4 20.2401 4 19.9601 4 19.4V17.6841C4 17.0485 4 16.7306 4.04798 16.4656C4.27087 15.2344 5.23442 14.2709 6.46558 14.048C6.5425 14.0341 6.6237 14.0242 6.71575 14.0172C6.94079 14 7.05331 13.9914 7.20361 14.0026C7.35983 14.0143 7.4472 14.0297 7.59797 14.0722C7.74302 14.1131 8.00429 14.2315 8.52682 14.4682C8.98953 14.6778 9.48358 14.8304 10 14.917M19.8726 15.2038C19.8044 15.2079 19.7357 15.21 19.6667 15.21C18.6422 15.21 17.7077 14.7524 17 14C16.2923 14.7524 15.3578 15.2099 14.3333 15.2099C14.2643 15.2099 14.1956 15.2078 14.1274 15.2037C14.0442 15.5853 14 15.9855 14 16.3979C14 18.6121 15.2748 20.4725 17 21C18.7252 20.4725 20 18.6121 20 16.3979C20 15.9855 19.9558 15.5853 19.8726 15.2038ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <script xmlns=""/></svg>
                        </Link>
                    </li>
                    }
                    {!isAuthenticated && 
                    <li className='group'>
                        <Link to={"/login"} className='flex items-center justify-center gap-x-3 cursor-pointer select-none'>
                            <span className='font-bold group-hover:text-amber-500 duration-300 transition-all'>Войти</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className='group-hover:stroke-amber-500 stroke-black duration-300 transition-all' width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <script xmlns=""/></svg> 
                        </Link>
                    </li>
                    }   
                </ul>
            </div>
        </div>
    )
}

export default Header;
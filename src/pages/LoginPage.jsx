import React, { useState } from 'react'
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const LoginPage = () => {

    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Form Data:', formData);
    };

    return (
        <div className='w-full py-20 flex h-full flex-col items-center justify-center'>
            <form action="" className='gap-y-5 py-5 px-10 flex flex-col w-80 items-center rounded-md shadow-cars' onSubmit={handleSubmit}>
                <img src="./images/logo.png" className='w-16' alt="" />
                <h1 className='font-bold text-2xl'>Авторизация</h1>
                <Input type={`text`} text={"Логин"} name="login" value={formData.login} onChange={handleChange} className="w-full"/>
                <Input type={`password`} text={"Пароль"} name="password" value={formData.password} onChange={handleChange} className="w-full"/>
                <button type='sumbit' className='w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Войти</button>
                <h1 className='text-xs font-semibold select-none'>Впервые? <Link to={"/register"} className='font-bold hover:text-amber-500 transition-all duration-300' >Зарегистрироваться</Link></h1>
            </form>
        </div>
    )
}

export default LoginPage;
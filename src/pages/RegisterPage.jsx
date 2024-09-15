import React, { useState } from 'react'
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

    const [formData, setFormData] = useState({
        login: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: ''
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
        <div className='w-full pt-20 flex h-full flex-col items-center justify-center'>
            <form className='gap-y-3 py-5 px-10 flex flex-col items-center rounded-md shadow-cars' onSubmit={handleSubmit}>
                <img src="./images/logo.png" className='w-16' alt="" />
                <h1 className='font-bold text-2xl'>Регистрация</h1>
                <Input type="text" name="login" text="Логин" value={formData.login} onChange={handleChange} className="w-full" />
                <div className='flex gap-x-3'>
                    <Input type="text" name="firstName" text="Имя" value={formData.firstName} onChange={handleChange} className="w-full" />
                    <Input type="text" name="lastName" text="Фамилия" value={formData.lastName} onChange={handleChange} className="w-full" />
                </div>
                <Input type="email" name="email" text="Почта" value={formData.email} onChange={handleChange} className="w-full" />
                <div className='flex gap-x-3'>
                    <Input type="tel" name="phone" text="Телефон" value={formData.phone} onChange={handleChange} className="w-full" />
                    <Input type="text" name="address" text="Адрес" value={formData.address} onChange={handleChange} className="w-full" />
                </div>
                <div className='flex gap-x-3 mb-3'>
                    <Input type="password" name="password" text="Пароль" value={formData.password} onChange={handleChange} className="w-full" />
                    <Input type="password" name="confirmPassword" text="Подтверждение пароля" value={formData.confirmPassword} onChange={handleChange} className="w-full" />
                </div>     
                <button type='sumbit' className='w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Зарегистрироваться</button>   
                <h1 className='text-xs font-semibold select-none'>Уже есть аккаут? <Link to={"/login"} className='font-bold hover:text-amber-500 transition-all duration-300' >Войти</Link></h1>
            </form>
        </div>
    )
}

export default RegisterPage;
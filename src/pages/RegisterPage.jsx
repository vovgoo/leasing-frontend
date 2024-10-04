import React, { useState } from 'react'
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const [errors, setErrors] = useState({});

    const navigate = useNavigate(); 
    const [errorVisible, setErrorVisible] = useState(false); 

    const validateForm = () => {
        let newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Логин не может быть пустым';
        }

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'Имя не может быть пустым';
        } else if (formData.firstName.length < 3) {
            newErrors.firstName = 'Имя должно содержать минимум 3 символа';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Фамилия не может быть пустой';
        } else if (formData.lastName.length < 3) {
            newErrors.lastName = 'Фамилия должна содержать минимум 3 символа';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Почта не может быть пустой';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Неверный формат почты';
        }

        if (!formData.password) {
            newErrors.password = 'Пароль не может быть пустым';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Пароль минимум 8 символов';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Пароли не совпадают';
        }

        const phoneRegex = /^\+375 \((25|29|33|44)\) \d{3}-\d{2}-\d{2}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = 'Телефон не может быть пустым';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Неверный формат телефона';
        }

        return newErrors;
    };

    const [formData, setFormData] = useState({
        username: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const userDto = {
                username: formData.username,
                passwordHash: formData.password,
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                phoneNumber: formData.phone,
                address: formData.address
            }
    
            try {
                const result = await axios.post('http://localhost:8080/api/v1/auth/signUp', userDto);
                setResponse(result.data); 
                setError(null);
                navigate('/login');
            } catch (err) {
                setErrorVisible(true); 
                setTimeout(() => {
                    setErrorVisible(false); 
                }, 3000);        
                setError(err.response ? err.response.data : 'Ошибка при отправке запроса');
            }
        }
      };


    return (
        <div className='w-full pt-20 flex h-full flex-col items-center justify-center'>
            <div className={`p-5 w-96 max-w-96 rounded-xl fixed right-10 bottom-10 bg-red-500 notification ${!errorVisible ? 'notification-exit' : 'notification'}`}>
                <h1 className='text-white font-bold'>Ошибка</h1>
                <h1 className='text-white mt-5'>Пользователем с такими логином или почтой уже существует.</h1>
            </div>

            <form className='gap-y-3 py-5 px-10 flex flex-col items-center rounded-md shadow-cars' onSubmit={handleSubmit}>
                <img src="/images/logo.png" className='w-16' alt="" />
                <h1 className='font-bold text-2xl'>Регистрация</h1>
                <Input type="text" name="username" text="Логин" value={formData.username} onChange={handleChange} className="w-full" classNameInput={`${errors.username ? 'outline-red-500' : ''}` }/>
                {errors.username && <p className='text-red-500 text-xs font-bold'>{errors.username}</p>}
                <div className='flex gap-x-3'>
                    <div>
                        <Input type="text" name="firstName" text="Имя" value={formData.firstName} onChange={handleChange} className="w-full"  classNameInput={`${errors.firstName ? 'outline-red-500' : ''}` }/>
                        {errors.firstName && <p className='text-red-500 text-xs font-bold w-full text-center pt-2'>{errors.firstName}</p>}
                    </div>
                    <div>
                        <Input type="text" name="lastName" text="Фамилия" value={formData.lastName} onChange={handleChange} className="w-full" classNameInput={`${errors.lastName ? 'outline-red-500' : ''}` }/>
                        {errors.lastName && <p className='text-red-500 text-xs font-bold w-full text-center pt-2'>{errors.lastName}</p>}
                    </div>
                </div>
                <Input type="email" name="email" text="Почта" value={formData.email} onChange={handleChange} className="w-full" classNameInput={`${errors.email ? 'outline-red-500' : ''}` }/>
                {errors.email && <p className='text-red-500 text-xs font-bold'>{errors.email}</p>}
                <div className='flex gap-x-3'>
                    <div className='w-full'>
                        <Input type="tel" name="phone" text="Телефон" value={formData.phone} onChange={handleChange} className="w-full" classNameInput={`${errors.phone ? 'outline-red-500' : ''}` } />
                        {errors.phone && <p className='text-red-500 text-xs font-bold w-full text-center pt-2'>{errors.phone}</p>}
                    </div>
                    <Input type="text" name="address" text="Адрес" value={formData.address} onChange={handleChange} className="w-full" />
                </div>
                <div className='flex gap-x-3 mb-3'>
                    <div>
                        <Input type="password" name="password" text="Пароль" value={formData.password} onChange={handleChange} className="w-full" classNameInput={`${errors.password ? 'outline-red-500' : ''}` }/>
                        {errors.password && <p className='text-red-500 text-xs font-bold pt-2 text-center'>{errors.password}</p>}
                    </div>
                    <div>
                        <Input type="password" name="confirmPassword" text="Подтверждение пароля" value={formData.confirmPassword} onChange={handleChange} className="w-full"  classNameInput={`${errors.confirmPassword ? 'outline-red-500' : ''}` }/>
                        {errors.confirmPassword && <p className='text-red-500 text-xs font-bold pt-2 text-center'>{errors.confirmPassword}</p>}
                    </div>
                </div>     
                <button type='sumbit' className='w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Зарегистрироваться</button>   
                <h1 className='text-xs font-semibold select-none'>Уже есть аккаут? <Link to={"/login"} className='font-bold hover:text-amber-500 transition-all duration-300' >Войти</Link></h1>
            </form>
        </div>
    )
}

export default RegisterPage;
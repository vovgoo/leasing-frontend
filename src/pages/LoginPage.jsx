import React, { useState } from 'react'
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthProvider';

const LoginPage = () => {

    const { login } = useAuth();

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    
    const [errorVisible, setErrorVisible] = useState(false); 


    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Логин не может быть пустым';
        }

        if (!formData.password) {
            newErrors.password = 'Пароль не может быть пустым';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            
            const userDto = {
                username: formData.username,
                password: formData.password
            }
    
            try {
                const result = await axios.post('http://localhost:8080/api/v1/auth/signIn', userDto);
                setResponse(result.data); 
                login(response.token);
                setError(null);
                // navigate('/');
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
        <div className='w-full py-20 flex h-full flex-col items-center justify-center'>
            <div className={`p-5 w-96 max-w-96 rounded-xl fixed right-10 bottom-10 bg-red-500 notification ${!errorVisible ? 'notification-exit' : 'notification'}`}>
                <h1 className='text-white font-bold'>Ошибка</h1>
                <h1 className='text-white mt-5'>Неверный логин или пароль</h1>
            </div>
            <form action="" className='gap-y-5 py-5 px-10 flex flex-col w-80 items-center rounded-md shadow-cars' onSubmit={handleSubmit}>
                <img src="/images/logo.png" className='w-16' alt="" />
                <h1 className='font-bold text-2xl'>Авторизация</h1>
                <Input type={`text`} text={"Логин"} name="username" value={formData.username} onChange={handleChange} className="w-full" classNameInput={`${errors.username ? 'outline-red-500' : ''}` }/>
                {errors.username && <p className='text-red-500 text-xs font-bold'>{errors.username}</p>}
                <Input type={`password`} text={"Пароль"} name="password" value={formData.password} onChange={handleChange} className="w-full" classNameInput={`${errors.password ? 'outline-red-500' : ''}` }/>
                {errors.username && <p className='text-red-500 text-xs font-bold'>{errors.username}</p>}
                <button type='sumbit' className='w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Войти</button>
                <h1 className='text-xs font-semibold select-none'>Впервые? <Link to={"/register"} className='font-bold hover:text-amber-500 transition-all duration-300' >Зарегистрироваться</Link></h1>
            </form>
        </div>
    )
}

export default LoginPage;
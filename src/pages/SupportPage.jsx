import React, { useState } from 'react'
import TextArea from '../components/TextArea';
import axios from 'axios';

const SupportPage = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [errorVisible, setErrorVisible] = useState(false); 
    const [notificationState, setNotificationState] = useState(null);

    const [formData, setFormData] = useState({
        subject: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.subject.trim()) {
            newErrors.subject = 'Сообщение не может быть пустым';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const token = localStorage.getItem('token');
                const result = await axios.post('http://localhost:8080/api/v1/users/support', formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                setResponse(result.data); 
                setNotificationState(1);
                // navigate('/');
            } catch (err) {
                setNotificationState(2);
                setError(err.response ? err.response.data : 'Ошибка при отправке запроса');
            }
            setErrorVisible(true); 
            setTimeout(() => {
                setErrorVisible(false); 
            }, 3000);        
        }

    };


    return (
        <div className="w-full h-dvh py-20 flex items-center justify-center relative">
            <div className='absolute h-full w-full contacts-image-gradient z-10 rotate-180'></div>
            <img src="/images/support.jpg"
                    className='opacity-100 absolute w-full object-contain -z-10'
                    alt="Контактное изображение" />
            <div className={`z-50 p-5 w-96 max-w-96 rounded-xl fixed right-10 bottom-10 ${notificationState === 1 ? "bg-green-500" : "bg-red-500"}  notification ${!errorVisible ? 'notification-exit' : 'notification'}`}>
                <h1 className='text-white font-bold'>{notificationState === 1 ? "Ваше сообщение отправлено" : "Ошибка сервера"}</h1>
                <h1 className='text-white mt-5'>{notificationState === 1 ? "В течение 24 часов вам на почту ответит наш специалист." : "Запрос не был отправлен"}</h1>
            </div>
            <form className='flex items-center justify-center px-10 shadow-cards py-10 z-50 rounded-xl gap-x-20 bg-white' onSubmit={handleSubmit}>
                <div className='w-1/2 flex flex-col items-center justify-center'>
                    <img src='/images/logo.png' className='h-20'></img>
                    <h1 className='text-3xl font-bold w-full text-center my-5'>У вас остались вопросы?</h1>
                </div>
                <div className='w-1/2 flex items-center justify-center flex-col'>
                    <h1 className='w-full text-center font-bold text-xl'>Напишите нам</h1>
                    <TextArea type={`text`} text={"Опишите суть вашей проблемы"} name="subject" value={formData.subject} onChange={handleChange} className="w-full mt-10" classNameInput={`h-40 resize-none scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 ${errors.subject ? 'outline-red-500' : ''}` }/>
                    {errors.subject && <p className='text-red-500 text-xs font-bold'>{errors.subject}</p>}
                    <button type='sumbit' className='mt-10 w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Отправить</button>
                </div>
            </form>
        </div>
    )
}

export default SupportPage;
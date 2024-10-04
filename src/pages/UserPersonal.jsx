import React, { useEffect, useState } from 'react'
import Input from '../components/Input';
import axios from 'axios';
import CarOrder from '../components/CarOrder';

import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const UserPersonal = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [metadata, setMetadata] = useState([]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "d MMMM yyyy HH:mm:ss", { locale: ru });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/v1/users/personal', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                setData(response.data);
                setMetadata(response.data.rentalsList.metadata);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const loadMoreRentalsHandler = () => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/api/v1/users/personalRentals?id=${metadata.page + 1}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                setData((prevState) => ({
                    ...prevState, 
                    rentalsList: {
                      ...prevState.rentalsList,
                      content: [...prevState.rentalsList.content, ...response.data.content],
                      metadata: [response.data.metadata]
                    },
                }));

                setMetadata(response.data.metadata);
                
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }


    const [formData, setFormData] = useState({
        login: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
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

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className={`pt-20 flex px-20 gap-x-20 my-10`}>

            <div className={`fixed ${isModalVisible ? 'flex' : 'hidden'} items-center justify-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg w-full h-full top-0 left-0 z-50`}>
                <div className=''>
                    <div className='bg-white p-10 shadow-cars rounded-xl relative'>
                        <form className='' onSubmit={handleSubmit}>
                            <div onClick={handleCloseModal} className='absolute right-10 top-10 duration-300 transition-all hover:fill-amber-500 cursor-pointer'>
                                <svg className='' xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="-2 -2 24 24" preserveAspectRatio="xMinYMin" class="jam jam-close-rectangle-f"><path d="M11.414 10l2.829-2.828a1 1 0 1 0-1.415-1.415L10 8.586 7.172 5.757a1 1 0 0 0-1.415 1.415L8.586 10l-2.829 2.828a1 1 0 0 0 1.415 1.415L10 11.414l2.828 2.829a1 1 0 0 0 1.415-1.415L11.414 10zM4 0h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" /><script xmlns="" /></svg>
                            </div>
                            <h1 className='w-full text-center font-bold'>Данные о пользователе</h1>
                            <Input type="text" name="login" text="Логин" value={formData.login} onChange={handleChange} className="w-full" />
                            <div className='flex gap-x-3'>
                                <Input type="text" name="firstName" text="Имя" value={formData.firstName} onChange={handleChange} className="w-full" />
                                <Input type="text" name="lastName" text="Фамилия" value={formData.lastName} onChange={handleChange} className="w-full" />
                            </div>
                            <Input type="email" name="email" text="Почта" value={formData.email} onChange={handleChange} className="w-full" />
                            <div className='flex gap-x-3 mb-10'>
                                <Input type="tel" name="phone" text="Телефон" value={formData.phone} onChange={handleChange} className="w-full" />
                                <Input type="text" name="address" text="Адрес" value={formData.address} onChange={handleChange} className="w-full" />
                            </div>
                            <button type='sumbit' className='w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='w-1/4 bg-white rounded shadow-cards h-full'>
                <div className='flex flex-col items-center gap-y-10 py-10 px-5'>
                    <div className='relative h-32 w-32'>
                        <div className='overflow-hidden w-full h-full rounded-full flex items-center justify-center'>
                            <img src="/images/main.jpg" className='h-full object-cover' alt="" />
                        </div>
                        <div className='absolute h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-300 duration-300 transition-all -bottom-4 left-1/2 -translate-x-1/2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 24 24"><path d="M5,22H19a1,1,0,0,0,1-1V6.414a1,1,0,0,0-.293-.707L16.293,2.293A1,1,0,0,0,15.586,2H5A1,1,0,0,0,4,3V21A1,1,0,0,0,5,22ZM9,11h6a1,1,0,0,1,0,2H9a1,1,0,0,1,0-2Z" /><script xmlns="" /></svg>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center gap-y-5'>
                        <h1 className='text-md font-semibold text-slate-500 cursor-pointer transition-all duration-300 hover:text-amber-500'>@{data.username}</h1>
                        <h1 className='text-xl font-bold'>{data.firstName} {data.lastName}</h1>
                        <h1 className='font-bold'>{data.phoneNumber}</h1>
                        <h1 className='font-semibold text-gray-500'>{data.email}</h1>
                        <h1 className='font-semibold text-gray-500'>{data.address}</h1>
                        <button onClick={handleOpenModal} type='sumbit' className='mt-5 w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Изменить</button>
                    </div>
                </div>
            </div>
            <div className='w-3/4 bg-white rounded shadow-cards py-5 px-5'>
                <h1 className='font-bold text-bold w-full text-center mb-5'>История поездок</h1>
                <div className='w-full flex flex-col justify-between h-full relative'>
                    <div className={`gap-y-10 flex flex-col ${ (metadata.page + 1) * metadata.size < metadata.totalElements ? "mb-20" : ""}`}>
                        {data && data.rentalsList && data.rentalsList.content && data.rentalsList.content.length > 0 && (data.rentalsList.content.map((rental, index) => (
                            <CarOrder orderId={index + 1} startData={formatDate(rental.startDate)} endDate={formatDate(rental.endDate)} car={rental.cars.make + " " + rental.cars.model + " " + rental.cars.year} rentalsStatus={rental.rentalsStatus} id={rental.id} />                    
                        )))}
                    </div>
                    { (metadata.page + 1) * metadata.size < metadata.totalElements && <button onClick={loadMoreRentalsHandler} className='absolute bottom-10 w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Загрузить еще</button>}
                </div>
            </div>

        </div>
    )
}

export default UserPersonal;
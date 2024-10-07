import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Particles from '../components/Particles';
import Input from '../components/Input';
import CarMainteance from '../components/CarMainteance';
import axios from 'axios';

const CarInfoPage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [metadata, setMetadata] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/cars?id=${id}`);
                setData(response.data);
                setMetadata(response.data.maintenance.metadata);
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
                const response = await axios.get(`http://localhost:8080/api/v1/maintenance?carId=${id}&pageNumber=${metadata.page + 1}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                setData((prevState) => ({
                    ...prevState, 
                    maintenance: {
                      ...prevState.maintenance,
                      content: [...prevState.maintenance.content, ...response.data.content],
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

    return (
        <div>
            <div className='h-dvh w-full overflow-hidden relative bg-black'>
                <h1 className='absolute w-full text-center z-30 mt-44 font-bold text-5xl text-white'>{data && data.cars && data.cars.make + " " + data.cars.model + " " + data.cars.year}</h1>
                <div className='absolute flex gap-y-20 w-full justify-between px-32 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-30'>
                    <div className='flex flex-col items-center gap-y-5'>
                        <div className='flex items-center justify-center gap-x-5'>
                            <h1 className='z-30 font-bold text-2xl text-white'>Пробег</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" version="1.1" id="Layer_1" width="35px" height="35px" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
                            <path d="M10,20C4.5,20,0,15.5,0,10S4.5,0,10,0s10,4.5,10,10S15.5,20,10,20z M10,2c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S14.4,2,10,2  z"/>
                            <path d="M8.6,11.4c-0.8-0.8-2.8-5.7-2.8-5.7s4.9,2,5.7,2.8c0.8,0.8,0.8,2,0,2.8C10.6,12.2,9.4,12.2,8.6,11.4z"/>
                            <script xmlns=""/></svg>
                        </div>
                        <h1 className='z-30 font-bold text-4xl text-white'>{data && data.cars && data.cars.mileage} км</h1>
                    </div>
                    <div className='flex flex-col items-center gap-y-5'>
                        <div className='flex items-center justify-center gap-x-5'>
                            <h1 className='z-30 font-bold text-2xl text-white'>Цена</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="2"/>
                            <path d="M15 9.94728C14.5 9.3 13.8 8.5 12 8.5C10.2 8.5 9 9.51393 9 9.94728C9 10.3806 9.06786 10.9277 10 11.5C10.7522 11.9618 12.6684 12.0439 13.5 12.5C14.679 13.1467 14.8497 13.8202 14.8497 14.0522C14.8497 14.6837 13.4175 15.4852 12 15.5C10.536 15.5153 9.5 14.7 9 14.0522" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 7V17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <script xmlns=""/></svg>    
                        </div>
                        <h1 className='z-30 font-bold text-3xl text-white'>{data && data.cars && data.cars.price}$/час</h1>
                    </div>
                </div>

                <h1 className='absolute z-30 font-bold text-3xl -translate-x-1/2 -translate-y-1/2 bottom-10 left-1/2'>Цвет: {data && data.cars && data.cars.color}</h1>  
                <h1 className='absolute z-30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 font-bold text-9xl text-white pb-36 opacity-50 outlined-text'>{data && data.cars && data.cars.make}</h1>
                <img className='absolute z-30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-car mt-20' src='/images/cartest.png'></img>
                <div className='opacity-55 absolute h-full w-full cars-image-gradient z-20'></div>
                <Particles/>
                <img className='absolute scale-150 bottom-32 z-0' src="/images/carpage.jpg" alt="" />
            </div>
            <div className='flex px-20 py-10 gap-x-5'>
                <div className='w-1/3 shadow-cards rounded p-10 h-full'>
                    <form className=''>
                        <h1 className='w-full font-bold text-center text-xl mb-5'>Забронировать авто</h1>
                        <div className='font-semibold flex flex-col gap-y-5 shadow-cards p-5 my-10 mx-16'>
                            <h1 className='w-full font-bold text-center text-xl mb-5'>К оплате</h1>
                            <div className='flex justify-between gap-x-5'>
                                <h1>Аренда авто: </h1>
                                <h1>123123 </h1>
                            </div>
                            <div className='flex justify-between gap-x-5'>
                                <h1>Техническое обслуживание: </h1>
                                <h1>123123 </h1>
                            </div>
                            <div className='flex justify-between gap-x-5'>
                                <h1>Бензин: </h1>
                                <h1>123123 </h1>
                            </div>
                            <hr/>
                            <div className='font-bold flex justify-between gap-x-5'>
                                <h1 className=''>Итого: </h1>
                                <h1>123123 </h1>
                            </div>
                        </div>
                        <Input text={"Количество часов"} type={"number"}/>
                        <button type='sumbit' className='mt-5 w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Арендовать</button>
                    </form>
                </div>

                <div className='w-2/3 shadow-cards rounded p-10'>
                    <h1 className='w-full font-bold text-center text-xl mb-10'>Техническое обслуживание</h1>
                    <div className='flex flex-col gap-y-10'>
                        {data && data.maintenance && data.maintenance.content && data.maintenance.content.length === 0 && (
                            <h1 className="my-10 font-semibold w-full text-center">
                                Похоже машина настолько новая, что техническое обслуживаение ее только ожидает :)
                            </h1>
                        )}
                        {data && data.maintenance && data.maintenance.content && data.maintenance.content.length > 0 && (data.maintenance.content.map((maintenance, index) => (
                            <CarMainteance id={index + 1} serviceName={maintenance.serviceName} startDate={maintenance.startDate} endDate={maintenance.endDate}/>
                        )))}
                        { (metadata.page + 1) * metadata.size < metadata.totalElements && <button onClick={loadMoreRentalsHandler} className='bottom-10 w-full select-none cursor-pointer rounded-xl py-2 px-3 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>Загрузить еще</button>}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CarInfoPage;
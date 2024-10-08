import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CarMain from '../components/CarMain';
import Input from '../components/Input';

const SearchPage = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8080/api/v1/cars/searchPage`);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mt-20 flex px-20 py-10 gap-x-10">

            <div className='w-2/12 p-5 rounded shadow-cards'>
                <h1 className='text-2xl font-bold py-5'>Фильтровать</h1>
                <hr/>
                <div>
                    <h1 className='font-bold py-5'>Цена</h1>

                </div>
                <hr/>
                <div>
                    <h1 className='font-bold py-5'>Производитель</h1>
                    <div>

                    </div>
                </div>
                <hr/>
                <div>
                    <h1 className='font-bold py-5'>Год выпуска</h1>
                    <div>
                        
                    </div>
                </div>
                <hr/>
                <div>
                    <h1 className='font-bold py-5'>Цвет</h1>
                    <div>
                        
                    </div>
                </div>
                <hr/>
                <div>
                    <h1 className='font-bold py-5'>Статус авто</h1>
                    <div>
                        
                    </div>
                </div>
            </div>


            <div className='w-10/12 flex flex-col'>
                <div className='w-full mb-5 h-12 flex gap-x-5'>
                    <input
                    placeholder="Поиск"
                    className={`px-3 w-10/12 font-bold outline-none focus:outline-amber-500 transition-all duration-300 text-gray-800 py-2 bg-slate-200 rounded`}
                    />
                    <button className='w-2/12 flex gap-x-3 group items-center justify-center cursor-pointer rounded-lg px-5 py-2 text-sm text-center bg-black text-white transition-all hover:bg-amber-500 hover:text-black duration-300 font-bold'>
                        Искать
                        <svg xmlns="http://www.w3.org/2000/svg" className='' width="20px" height="20px" viewBox="0 0 24 24">
                        <path className='stroke-white fill-transparent duration-300 transition-all group-hover:stroke-black' d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <script xmlns=""/></svg>
                    </button>
                </div>
                <div className='w-full rounded shadow-cards flex flex-col px-20 py-5'>
                    <h1 className='w-full text-xl font-bold text-center my-5'>Выберите класс авто</h1>
                    <div className='flex w-full h-20 rounded p-3 gap-x-10'>
                        <div className='w-1/3 h-full shadow-cards rounded-xl flex items-center justify-center bg-amber-500 gap-x-5'>
                            <h1 className='font-bold text-black'>Эконом класс</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" width="25px" version="1.1" id="_x32_" viewBox="0 0 512 512">
                            <g>
                                <path class="st0" d="M500.325,211.661l-34.024-54.143c-11.508-18.302-31.61-29.402-53.216-29.402H254.645   c-26.654,0-52.195,10.719-70.849,29.745l-45.216,46.107L30.738,228.933C12.733,233.11,0,249.147,0,267.615v42.348   c0,9.122,7.406,16.538,16.538,16.538h57.336c-0.074,1.141-0.185,2.274-0.185,3.425c0,29.8,24.167,53.958,53.977,53.958   c29.792,0,53.958-24.158,53.958-53.958c0-1.151-0.111-2.284-0.185-3.425h169.67c-0.074,1.141-0.185,2.274-0.185,3.425   c0,29.8,24.166,53.958,53.958,53.958c29.81,0,53.958-24.158,53.958-53.958c0-1.151-0.092-2.284-0.166-3.425h36.789   c9.132,0,16.538-7.416,16.538-16.538v-57.81C512,237.824,507.954,223.801,500.325,211.661z M127.666,351.43   c-11.879,0-21.494-9.643-21.494-21.504c0-11.871,9.615-21.495,21.494-21.495c11.86,0,21.494,9.624,21.494,21.495   C149.16,341.786,139.526,351.43,127.666,351.43z M264.13,215.754h-97.188l37.198-37.93c13.216-13.476,31.628-21.198,50.505-21.198   h9.486V215.754z M374.998,215.754h-85.94v-59.128h85.94V215.754z M404.882,351.43c-11.86,0-21.494-9.643-21.494-21.504   c0-11.871,9.634-21.495,21.494-21.495c11.879,0,21.494,9.624,21.494,21.495C426.376,341.786,416.761,351.43,404.882,351.43z    M399.944,215.754v-59.128h13.142c11.879,0,22.756,6.004,29.067,16.065l27.062,43.063H399.944z"/>
                            </g>
                            <script xmlns=""/></svg>
                        </div>
                        <div className='w-1/3 h-full shadow-cards rounded-xl flex items-center justify-center gap-x-5'>
                            <h1 className='font-bold'>Средний класс</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="25px" height="25px" viewBox="0 -39.69 122.88 122.88" version="1.1" id="Layer_1">
                            <g>
                            <path class="st0" d="M103.94,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76c-5.39,0-9.76-4.37-9.76-9.76 C94.18,28.34,98.55,23.97,103.94,23.97L103.94,23.97z M23,29.07v3.51h3.51C26.09,30.86,24.73,29.49,23,29.07L23,29.07z M26.52,34.87H23v3.51C24.73,37.97,26.09,36.6,26.52,34.87L26.52,34.87z M20.71,38.39v-3.51H17.2 C17.62,36.6,18.99,37.96,20.71,38.39L20.71,38.39z M17.2,32.59h3.51v-3.51C18.99,29.49,17.62,30.86,17.2,32.59L17.2,32.59z M105.09,29.07v3.51h3.51C108.18,30.86,106.82,29.49,105.09,29.07L105.09,29.07z M108.6,34.87h-3.51v3.51 C106.82,37.97,108.18,36.6,108.6,34.87L108.6,34.87z M102.8,38.39v-3.51h-3.51C99.71,36.6,101.07,37.96,102.8,38.39L102.8,38.39z M99.28,32.59h3.51v-3.51C101.07,29.49,99.71,30.86,99.28,32.59L99.28,32.59z M49.29,12.79c-1.54-0.35-3.07-0.35-4.61-0.28 C56.73,6.18,61.46,2.07,75.57,2.9l-1.94,12.87L50.4,16.65c0.21-0.61,0.33-0.94,0.37-1.55C50.88,13.36,50.86,13.15,49.29,12.79 L49.29,12.79z M79.12,3.13L76.6,15.6l24.13-0.98c2.48-0.1,2.91-1.19,1.41-3.28c-0.68-0.95-1.44-1.89-2.31-2.82 C93.59,1.86,87.38,3.24,79.12,3.13L79.12,3.13z M0.46,27.28H1.2c0.46-2.04,1.37-3.88,2.71-5.53c2.94-3.66,4.28-3.2,8.65-3.99 l24.46-4.61c5.43-3.86,11.98-7.3,19.97-10.2C64.4,0.25,69.63-0.01,77.56,0c4.54,0.01,9.14,0.28,13.81,0.84 c2.37,0.15,4.69,0.47,6.97,0.93c2.73,0.55,5.41,1.31,8.04,2.21l9.8,5.66c2.89,1.67,3.51,3.62,3.88,6.81l1.38,11.78h1.43v6.51 c-0.2,2.19-1.06,2.52-2.88,2.52h-2.37c0.92-20.59-28.05-24.11-27.42,1.63H34.76c3.73-17.75-14.17-23.91-22.96-13.76 c-2.67,3.09-3.6,7.31-3.36,12.3H2.03c-0.51-0.24-0.91-0.57-1.21-0.98c-1.05-1.43-0.82-5.74-0.74-8.23 C0.09,27.55-0.12,27.28,0.46,27.28L0.46,27.28z M21.86,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76 c-5.39,0-9.76-4.37-9.76-9.76C12.1,28.34,16.47,23.97,21.86,23.97L21.86,23.97z"/>
                            </g>
                            <script xmlns=""/></svg>
                        </div>
                        <div className='w-1/3 h-full shadow-cards rounded-xl flex items-center justify-center gap-x-5'>
                            <h1 className='font-bold'>Премиум класс</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="25px" height="25px" viewBox="0 -43.92 122.88 122.88" version="1.1" id="Layer_1">
                            <g>
                            <path class="st0" d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"/>
                            </g>
                            <script xmlns=""/>
                            </svg>
                        </div>
                    </div> 
                    <h1 className='w-full text-xl font-bold text-center mt-5 mb-10'>Результаты вашего поиска</h1>
                    <div className='flex flex-wrap w-full items-center justify-center gap-10'>
                        {data && data.cars && data.cars.content && (data.cars.content.map((car) => (
                            <CarMain data={car} />
                        )))}
                    </div>   
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage;
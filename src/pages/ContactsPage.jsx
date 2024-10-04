import React, { useState } from 'react'

const ContactsPage = () => {
    return (
        <div className="w-full pb-20 overflow-hidden">
            <div className='relative w-full flex flex-col gap-y-10 h-dvh mb-20 overflow-hidden'>
                <div className='absolute h-full w-full contacts-image-gradient z-10 rotate-180'></div>
                <img src="/images/contacts.jpg"
                    className='opacity-50 absolute pt-96 left-1/2 top-96 object-contain w-full -z-10 -translate-x-1/2 -translate-y-1/2'
                    alt="Контактное изображение" />
                <div className='absolute w-full h-full -top-20 items-center justify-center flex flex-col gap-y-5 px-44 z-10'>
                    <img src="/images/logo.png" className='h-40' alt="" />
                    <h1 className='text-4xl font-bold w-full text-center mt-5'>
                        Vovgoo Dev - инновационный подход к лизингу автомобилей
                    </h1>
                    <p className='text-center font-semibold text-xl'>
                        Мы в Vovgoo Dev предлагаем вам новые возможности для аренды и лизинга автомобилей. С нашими гибкими условиями, вы можете выбрать подходящий автомобиль для любого случая, будь то долгосрочная аренда или краткосрочный лизинг.
                    </p>
                </div>
            </div>
            <div className='flex mx-20 justify-between'>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='w-4/6 overflow-hidden rounded-xl shadow-cars'>
                        <img className='object-center object-contain' src='/images/contacts1.jpg'></img>
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center flex-col'>
                    <div className='w-4/6 flex flex-col gap-y-5'>
                        <h1 className='text-3xl font-bold w-full text-center'>Наша миссия</h1>
                        <p className='text-center text-lg font-semibold'>Наша цель — сделать лизинг автомобилей максимально простым, доступным и удобным. Мы верим, что каждый должен иметь возможность пользоваться качественными автомобилями без необходимости их покупать. Поэтому мы предлагаем прозрачные условия, без скрытых комиссий, и инновационные решения для оплаты.</p>
                    </div>
                </div>
            </div>

            <div className='flex my-20 mx-20 relative'>
                <img src='/images/cars_wheel.png' className='opacity-65 absolute -z-10 h-96 -top-80 -left-52 rotate-45'></img>
                <img src='/images/cars_wheel.png' className='opacity-65 absolute -z-10 h-96 -top-40 left-96 rotate-45'></img>
                <img src='/images/cars_wheel.png' className='opacity-65 absolute -z-10 h-96 top-28 -right-96 rotate-45'></img>
                <img src='/images/cars_wheel.png' className='opacity-65 absolute -z-10 h-96 top-0 right-0 rotate-45'></img>
                <div className='w-1/2 flex items-center justify-center flex-col'>
                    <h1 className='text-3xl font-bold text-center my-10'>Почему выбирают нас?</h1>
                    <ul className='w-full text-center px-28 flex flex-col gap-y-2'>
                        <li className='py-5 text-lg font-semibold'>Широкий выбор автомобилей: В нашем автопарке представлены автомобили на любой вкус и бюджет — от эконом-класса до премиальных моделей.</li>
                        <li className='py-5 text-lg font-semibold'>Прозрачные условия: Без скрытых платежей и неожиданных комиссий. Вы платите только за то, что используете.</li>
                        <li className='py-5 text-lg font-semibold'>Удобные способы оплаты: Поддерживаем традиционные методы (кредитные и дебетовые карты), а также современные решения, такие как криптовалюты (например, Hamster Coin).</li>
                        <li className='py-5 text-lg font-semibold'>Поддержка 24/7: Мы всегда на связи и готовы помочь вам с любыми вопросами.</li>
                    </ul>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='w-4/6 overflow-hidden rounded-xl shadow-cars'>
                        <img className='object-center object-contain' src='/images/contacts2.jpg'></img>
                    </div>
                </div>
            </div>

            <h1 className='text-3xl font-bold text-center my-10'>Связаться с нами</h1>
            <div className='w-full px-28'>
                <div className='w-full my-10 overflow-hidden rounded-xl shadow-cars' style={{ position: 'relative', overflow: 'hidden' }}>
                    <a
                        href="https://yandex.eu/maps?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>
                        Яндекс Карты
                    </a>
                    <a
                        href="https://yandex.eu/maps/154/vitebsk/house/Z0kYdAVpQE0HQFtvfX5wcHVqZA==/?ll=30.295898%2C55.211990&mode=search&sll=2.351556%2C48.856663&sspn=0.493011%2C0.179198&text=%D0%B3%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%2041%D0%B0&utm_medium=mapframe&utm_source=maps&z=12"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
                        Гагарина 41а — Яндекс Карты
                    </a>
                    <iframe
                        className='w-full'
                        src="https://yandex.com/map-widget/v1/?ll=30.295898%2C55.211990&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg2NjU5OTM1ORJF0JHQtdC70LDRgNGD0YHRjCwg0JLRltGG0LXQsdGB0LosINCy0YPQu9GW0YbQsCDQk9Cw0LPQsNGA0YvQvdCwLCA0MdCQIgoNAtfxQRUT2VxC&sll=2.351556%2C48.856663&sspn=0.493011%2C0.179198&text=%D0%B3%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%2041%D0%B0&z=12"
                        height="500"
                        frameBorder="1"
                        allowFullScreen={true}
                        style={{ position: 'relative' }}>
                    </iframe>
                </div>
            </div>
            <div className='flex w-full justify-between px-28 text-xl pt-10 relative'>
                <div className='flex flex-col items-center justify-center gap-y-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="60px" width="60px" version="1.1" id="Capa_1" viewBox="0 0 494.914 494.914">
                        <g>
                            <path d="M285.813,266.034v36.483c91.16,9.032,145.408,40.674,145.408,64.427c0,27.993-75.088,67.024-197.362,67.024   S36.514,394.937,36.514,366.944c0-23.93,54.996-55.856,147.32-64.635v-36.466C87.701,274.843,0,309.59,0,366.944   c0,67.247,120.488,103.54,233.858,103.54c113.369,0,233.877-36.293,233.877-103.54   C467.735,309.972,381.194,275.321,285.813,266.034z" />
                            <path d="M486.869,40.363c-2.789-1.752-5.959-2.63-9.145-2.63c-2.551,0-5.098,0.558-7.472,1.704l-30.271,14.689   c-14.084,6.836-29.346,10.245-44.593,10.245c-16.123,0-32.214-3.808-46.919-11.392c-14.673-7.568-30.699-11.327-46.695-11.327   c-16.728,0-33.441,4.095-48.592,12.252V42.8c0-10.149-8.236-18.37-18.369-18.37c-10.133,0-18.354,8.221-18.354,18.37v328.94   c0,10.133,8.221,18.354,18.354,18.354c10.133,0,18.369-8.221,18.369-18.354V203.853c15.15-8.157,31.88-12.268,48.607-12.268   c15.996,0,32.007,3.76,46.68,11.326c14.705,7.584,30.796,11.393,46.902,11.393c15.247,0,30.51-3.41,44.609-10.244l45.245-21.953   c5.927-2.868,9.686-8.859,9.686-15.438V54.908C494.914,48.981,491.855,43.485,486.869,40.363z" />
                        </g>
                    </svg>
                    <h1 className='font-bold text-amber-500'>ул. Гагарина 41А</h1>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="60px" height="60px" viewBox="0 0 24 24"><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" /><script xmlns="" /></svg>
                    <h1 className='font-bold text-amber-500'>vovgoo@example.com</h1>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24" fill="none">
                        <path d="M18 9V6M18 6V3M18 6H15M18 6H21M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <script xmlns="" /></svg>
                    <h1 className='font-bold text-amber-500'>+375 (32) 812-81-1</h1>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage;
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex-end flex flex-col bg-black'>
            <div className='flex w-full justify-between pt-20 pb-10 px-20'>
                
                <div className='flex-col w-1/3 flex gap-y-5 justify-center'>
                    <div className='flex items-center gap-x-5'>
                        <img src="./images/logo.png" className='h-10 invert' alt="" />
                        <span className='font-bold text-xl text-white'>vovgoo dev.</span>
                    </div>
                    <div className='w-full'>
                        <span className='text-white'>Лучший сервис по аренде авто. Вы можете нам доверять.</span>
                    </div>
                </div>

                <div className='text-white w-1/3 flex flex-col'>
                    <ul className='flex flex-col gap-y-3 items-center'>
                        <li className='font-bold mb-2'>Навигация</li>
                        <li>Наши контакты</li>
                        <li>Все машины</li>
                        <li>Поддержка</li>
                    </ul>
                </div>

                <div className='text-white w-1/3 flex flex-col'>
                    <ul className='flex flex-col gap-y-3 items-center'>
                        <li className='font-bold mb-2'>Наши контакты</li>
                        <li>Справочный центр: ул. Гагарина 41А</li>
                        <li>Email: vovgoo@example.com</li>
                        <li>Номер телефона: +375 (32) 812-81-12</li>
                    </ul>
                </div>

            </div>
            
            <div className='h-full w-full flex items-center justify-center bg-black'>
                <span className='text-white py-10'>Все права защищены. 2024</span>
            </div>
        </div>
    )
}

export default Footer;
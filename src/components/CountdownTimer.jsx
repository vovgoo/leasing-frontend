import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endDate }) => {
    const [timeLeft, setTimeLeft] = useState(null);

    const calculateTimeLeft = () => {
        const now = new Date();
        const end = new Date(endDate);
        const difference = end - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24)); 
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24); 
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60); 
            
            const totalHours = days * 24 + hours;

            return {
                totalHours,
                minutes,
                seconds,
            };
        } else {
            return null;
        }
    };

    useEffect(() => {
        if (endDate) {
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [endDate]);

    if (!timeLeft) {
        return null;
    }

    return (
        <div className='font-bold flex flex-col items-center gap-y-5 my-5'>
            <h1 className='text-xl'>До конца аренды осталось</h1>
            <div>
                <h1 className='text-3xl text-white py-2 px-5 bg-black rounded-xl'>
                    {`${timeLeft.totalHours} : ${timeLeft.minutes} : ${timeLeft.seconds}`}
                </h1>
            </div>
        </div>
    );
};

export default CountdownTimer;

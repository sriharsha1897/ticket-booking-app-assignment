import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timer } from '../../slices/checkoutSlice';


const CountDown = () => {

    const checkoutTime = useSelector((state) => state.checkout.checkoutTime);

    const { hours, minutes, seconds } = checkoutTime;

    const dispatch = useDispatch();

    useEffect(() => {
        const timerId = setInterval(() => dispatch(timer()), 1000);
        return () => clearInterval(timerId);
    });


    return (

        <div>
            <h3>
                {`Time Left :  ${hours.toString().padStart(2, '0')}:
                ${minutes.toString().padStart(2, '0')}:
                ${seconds.toString().padStart(2, '0')}`}
            </h3>
        </div>

    );

};


export default CountDown;
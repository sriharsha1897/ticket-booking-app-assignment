import React from 'react';
import { useNavigate } from 'react-router-dom';
import Seat from '../Seat/Seat';
import styles from './BookTicket.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutTickets } from '../../slices/checkoutSlice';
import { clearCheckedItems } from '../../slices/checkoutSlice';


const BookTicket = () => {

    const initialData = useSelector((state) => state.checkout.initialData);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleCheckout = () => {
        dispatch(checkoutTickets());
        navigate('/checkout');
        setTimeout(() => dispatch(clearCheckedItems()), 300000);
    };


    return (

        <div className='container'>

            <div className={`my-5 ${styles.theatreHall}`}>

                <div className='mx-auto my-3 d-flex justify-content-around align-items-center'>
                    {initialData.slice(30, 36).map((item, index) =>
                        <Seat key={index} item={item} />
                    )}
                </div>

                <div className='mx-auto my-3 d-flex justify-content-around align-items-center'>
                    {initialData.slice(24, 30).map((item, index) =>
                        <Seat key={index} item={item} />
                    )}
                </div>

                <div className='mx-auto my-3 d-flex justify-content-around align-items-center'>
                    {initialData.slice(18, 24).map((item, index) =>
                        <Seat key={index} item={item} />
                    )}
                </div>

                <div className='mx-auto my-3 d-flex justify-content-around align-items-center'>
                    {initialData.slice(12, 18).map((item, index) =>
                        <Seat key={index} item={item} />
                    )}
                </div>

                <div className='mx-auto my-3 d-flex justify-content-around align-items-center'>
                    {initialData.slice(6, 12).map((item, index) =>
                        <Seat key={index} item={item} />
                    )}
                </div>

                <div className='mx-auto my-3 d-flex justify-content-around align-items-center'>
                    {initialData.slice(0, 6).map((item, index) =>
                        <Seat key={index} item={item} />
                    )}
                </div>

            </div>

            <button
                className='d-block mx-auto my-5 btn btn-lg btn-primary'
                onClick={handleCheckout}
            >
                CONFIRM
            </button>

        </div>

    );

};


export default BookTicket;
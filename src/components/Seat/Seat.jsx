import React from 'react';
import styles from './Seat.module.css';
import { useDispatch } from 'react-redux';
import { handleSeatSelection } from '../../slices/checkoutSlice';

const Seat = ({ item }) => {

    const dispatch = useDispatch();

    const seatColor = (status) => {
        if (status === 'selected') return styles.selected;
        else if (status === 'booked') return styles.booked;
        else if (status === 'disabled') return styles.disabled;
        else return null;
    };

    const clickHandler = () => {
        dispatch(handleSeatSelection(item));
    };

    return (

        <div className={`p-1 ${styles.seat} ${seatColor(item.status)}`} onClick={clickHandler}>

            <span>{item.seatNo}</span>
            <img src={item.image} alt='seat' />

        </div>

    );

};


export default Seat;
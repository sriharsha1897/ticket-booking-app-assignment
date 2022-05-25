import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CountDown from '../CountDown/CountDown';



const Checkout = () => {

    const checkedItems = useSelector((state) => state.checkout.checkedItems);

    const [warning, setWarning] = useState(false);


    let totalBillAmount = checkedItems.reduce((sum, item) => {
        return (sum + item.ticketPrice);
    }, 0);


    useEffect(() => {
        if (checkedItems.length === 0) {
            setWarning(true);
        }
        else {
            setWarning(false);
        }
    }, [checkedItems.length]);


    return (
        <div className='container my-3'>
            {
                warning ?
                    <div className='my-5'>
                        <h2 className='text-center text-success'>
                            Dear Customer, <br /><br />
                            Please select the seats to see the order summary!
                        </h2>
                    </div>
                    :
                    <div className='table-responsive w-75 mx-auto'>
                        <h3 className='text-center text-success'>
                            Order Summary
                        </h3>
                        <CountDown />
                        <table className='table my-3 text-center align-middle bg-white'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>Sl.No</th>
                                    <th>#</th>
                                    <th>Seat No</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    checkedItems.map((item, index) => {
                                        return (

                                            <tr key={item.id}>

                                                <td>{(index + 1)}</td>

                                                <td>
                                                    <img
                                                        className='img-thumbnail'
                                                        src={item.image}
                                                        alt='seat'
                                                    />
                                                </td>

                                                <td>{item.seatNo}</td>

                                                <td>{item.ticketPrice}</td>

                                            </tr>

                                        )
                                    })
                                }

                            </tbody>
                            <tfoot className='table-dark'>
                                <tr>
                                    <th colSpan='3'>Total Bill Ammount</th>
                                    <th>{totalBillAmount}</th>
                                </tr>
                            </tfoot>
                        </table>
                        <button className='d-block mx-auto my-5 btn btn-lg btn-primary' onClick={() => {alert('Your payment is successfull')}}>PAY NOW</button>
                       

                    </div>

            }

        </div>

    );

};


export default Checkout;
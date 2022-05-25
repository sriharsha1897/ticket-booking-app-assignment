import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../images/logo.png';

const Navbar = () => {

  return (

    <nav className={`navbar ${styles.navbarStyle}`}>

      <div className='container'>

        <h1 className={`navbar-brand ${styles.brandStyle}`}>
          <img
            src={logo}
            alt='logo'
            className='d-inline-block align-text-center me-4'
          />
          Movie Ticket Booking App
        </h1>

        <div className='d-flex'>

          <Link className={styles.linkStyle} to='/'>
            <h1 className='nav-item navbar-brand mx-5'>Home</h1>
          </Link>

          <Link className={styles.linkStyle} to='/bookTickets'>
            <h1 className='nav-item navbar-brand mx-5'>Book Your Tickets</h1>
          </Link>

          <Link className={styles.linkStyle} to='/checkout'>
            <h1 className='nav-item navbar-brand mx-5'>Checkout</h1>
          </Link>

        </div>

      </div>

    </nav>

  );

};


export default Navbar;
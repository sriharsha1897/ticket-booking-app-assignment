import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import BookTicket from './components/BookTicket/BookTicket';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookTickets' element={<BookTicket />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
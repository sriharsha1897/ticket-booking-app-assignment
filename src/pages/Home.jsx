import React from 'react';
import { useNavigate } from 'react-router-dom';
import PosterCarousel from '../components/PosterCarousel/PosterCarousel';


const Home = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/bookTickets');
  };

  return (

    <div className='container my-3'>

      <h1 className='my-4 text-center text-primary'>
        Enjoy Your Movies!
      </h1>

      <PosterCarousel />

      <button
        className='d-block mx-auto my-4 btn btn-lg btn-primary'
        onClick={handleNavigate}
      >
        Book Tickets
      </button>

    </div>

  );

};


export default Home;
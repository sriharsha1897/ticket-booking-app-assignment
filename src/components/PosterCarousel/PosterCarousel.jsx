import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import fantasticBeasts from '../../images/fantasticBeasts.png';
import doctorStrange from '../../images/doctorStrange.png';
import kgfChapter2 from '../../images/kgfChapter2.png';


const PosterCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <div className='w-75 mx-auto'>

            <Carousel activeIndex={index} onSelect={handleSelect}>

                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={fantasticBeasts}
                        alt='fantasticBeasts'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={doctorStrange}
                        alt='doctorStrange'
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={kgfChapter2}
                        alt='kgfChapter2'
                    />
                </Carousel.Item>

            </Carousel>

        </div>

    );
};


export default PosterCarousel;
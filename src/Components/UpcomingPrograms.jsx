import React from 'react'
import ImageSlider from './Slider'
import organic from "../assets/organic.jpeg";
import jamb from "../assets/jamb.jpeg";

const images = [
    jamb,
    organic,
];

const UpcomingPrograms = () => {
  return (
    <div className='my-10'>
        <h2 className='text-center text-darkPurple font-bold text-lg md:text-xl mt-12 mb-4'>
            OUR UPCOMING PROGRAMS!
        </h2>
    <ImageSlider images={images}/>
    </div>
  )
}

export default UpcomingPrograms
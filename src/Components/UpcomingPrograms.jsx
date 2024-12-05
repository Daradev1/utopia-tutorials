import React from 'react'
import ImageSlider from './Slider'
import organic from "../assets/organic.jpeg";
import jamb from "../assets/jamb.jpeg";

const images = [
    jamb,
    organic,
];

const UpcomingPrograms = () => {
  const HandleClick = () => {

    // WhatsApp API link with pre-filled message
    const whatsappLink = `https://wa.me/message/GNESJSO7Q7RLI1`; // Replace 2348123456789 with the WhatsApp number

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");
  };
  return (
    <div className='my-10 flex items-center flex-col'>
        <h2 className='text-center text-darkPurple font-bold text-lg md:text-xl mt-12 mb-4'>
            OUR UPCOMING PROGRAMS!
        </h2>
    <ImageSlider images={images}/> 
    <a onClick={HandleClick}><button className='py-2 w-28 bg-primaryPurple hover:bg-darkPurple text-white rounded mt-8 mx-auto'>Join Now</button></a>
    </div>
  )
}

export default UpcomingPrograms
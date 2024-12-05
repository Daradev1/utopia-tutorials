import React from 'react'
import jambBg from '../assets/jambBg.jpg';
import EnrollBtn from './EnrollBtn';

const Hero = () => {
  const handleEnroll = () => {
    const message = encodeURIComponent(
      "Hello! My name is ___ (insert your name). I want to make payment for Utopia JAMB class"
    );

    // WhatsApp API link with pre-filled message
    const whatsappLink = `https://wa.me/2348145123497?text=${message}`; // Replace 2348123456789 with the WhatsApp number

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank");
  };
  return (
    <div>
     <div
  className="relative bg-cover bg-center h-[500px]"
  style={{ backgroundImage: `url(${jambBg})` }}>

  <div className="absolute inset-0 bg-black bg-opacity-70"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Welcome to Utopia Tutorials
    </h1>
    <p className="text-lg md:text-2xl mb-6">
    Are you looking forward to scoring <span className='text-white text-2xl font-bold'>300+</span> in your UTME?
    <br /><br />
    <p className='text-lg md:text-2xl mb-6'>Here's a top secret for scoring 300+...</p>
    </p>
    <div>
        <EnrollBtn onclick={handleEnroll}  text={"Enroll Now"}/>
    </div>
  </div>
</div>
 
    </div>
  )
}

export default Hero

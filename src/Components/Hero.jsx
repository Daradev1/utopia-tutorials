import React from 'react'
import jambBg from '../assets/jambBg.jpg';

const Hero = () => {
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
    <button className="bg-primaryPurple text-white px-6 py-3 rounded-lg hover:bg-darkPurple transition">
      Get Started
    </button>
  </div>
</div>
 
    </div>
  )
}

export default Hero

// import jambtes1 from "../assets/jambtes1.jpg"
// import jambtes2 from "../assets/jambtes2.jpg"
// import jambtest3 from "../assets/jambtest3.jpg"
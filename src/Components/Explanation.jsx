import React from 'react'
import Darasimi from "../assets/DaraTestimoni.jpg"
import Yazid from "../assets/Yazid.jpg"
import testimonies from "../assets/Testimonies.jpg"
import TestimonialSlider from './Slider'
import ImageSlider from './Slider'

import jambtes1 from "../assets/jambtes1.jpg"
import jambtes2 from "../assets/jambtes2.jpg"
import jambtest3 from "../assets/jambtest3.jpg"
import jambrecord from "../assets/jambtest3.jpg"
import Utme from './Utme'
import Bonus from './Bonus'
import UpcomingPrograms from './UpcomingPrograms'

const images = [
  jambtes1,
  jambtes2,
  jambtest3,
  jambrecord
];

const Explanation = () => {
  
  return (
    <div className='mt-9'>
     <div className='md:w-[75%] w-full px-3 text-center m-auto text-gray-600 text-normal md:text-lg'>
     <p>
         
         Scoring 300+ isn't about just reading and doing JAMB CBT on apps alone. It's not an easy feat because it takes a lot. Many students have read and still failed UTME?
         
         Does it mean that you'll not pass after reading and doing JAMB CBT on apps? Well, it depends. But, doing all that isn't enough.
         <br /> <br />
         
         Just follow through to get the main gist 
         <br />
         So, this common secret fro scoring 300+ was what Darasimi took advantage of and scored 329/400. Do you want to know how he achieved it? Then,
          <br /> <span className='text-xl text-gray-800 font-bold'>read what he wrote here</span> 👇 </p>
          <img src={Darasimi} className='w-[350px] m-auto' alt="Darasimi jamb testimoni" />
  <br /> <br />
  <p> 
  It was the same secret for scoring 300+ that Amuda Yazid applied and scored 322/400. <span className='text-lg text-gray-800 font-bold'>Check this image to see his testimony</span>👇
  <img src={Yazid} className='w-[350px] m-auto' alt="Darasimi jamb testimoni" />

  <br /><br /> <br />
  <span className='text-xl text-darkPurple font-bold '>We have more testimonials for you to see, check our a few of them here🔽✅</span> </p>
  <img src={testimonies} className='w-[350px] m-auto my-7' alt="" />
   
     </div>
     <ImageSlider images={images}/>
   <Utme/>
   <Bonus/>
   <UpcomingPrograms/>
    </div>
  )
}

export default Explanation
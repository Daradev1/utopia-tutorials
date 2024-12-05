import React from 'react'
import effective from "../assets/effective.jpeg";
import organic from "../assets/organic.jpeg";
import utmeRevelation from "../assets/utmeRevelation.jpeg";
import chemistry from "../assets/chemistry.jpeg";
import rename from "../assets/rename.jpeg";
import { FaArrowDown } from 'react-icons/fa';

const images = [
    effective,
    organic,
    utmeRevelation,
    chemistry,
    rename
  ];

const Bonus = () => {
  return (
    <div className='mt-10 px-3'>
    <div className='flex items-center w-full justify-center md:gap-1 gap-0'>
    <p className='text-sm text-center text-darkPurple text-normal md:text-lg'>
    Here are special bonuses you get by just registering for our UTME class today
    </p> <FaArrowDown/>
    </div>
    <br />
   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
   <img src={effective} className='w-[350px] rounded-md m-auto my-4' alt="Bonus" />
   <img src={chemistry} className='w-[350px] rounded-md m-auto my-4' alt="Chemistry Jamb" />
   </div>
   <p className='md:w-[65%] w-full mx-auto text-center m-auto text-gray-600 text-normal md:text-lg'>
   Both videos are worth up to 20K. But because of the CEO's passion to help many students improve in their study, he decided to tag the chemistry video course 2K and the Effective studying video course 1K.

But right now, he wants to give out the two video courses for free if and only if you join the class today.

It's cheating on our part. Because he used a lot of resources, time, energy and money to sit down, shoot and edit these videos for you!

But, he's giving out the course for free if and only if you register for the UTME class now.
<br /> <br />
Can you see that all we have for you is already worth more than 5K? In case you have forgotten all you'll be gaining from this class, it's all here for you ok the flyer below👇
   </p>
   <img src={utmeRevelation} className='w-[350px] rounded-md m-auto my-4' alt="Jamb Tutors" />
   <h2 className='text-center text-darkPurple font-bold text-lg md:text-xl mt-12 mb-4'>EXTRA BONUS💥</h2>
   <div className="flex gap-2  justify-center   flex-wrap">
    <div className='md:flex-1 w-full mt-10'>
    <p className='md:w-[65%] w-full mx-auto text-center m-auto text-gray-600 text-normal md:text-lg'>
   Here is another reason you should join us.🥳
You get the chance to earn while you learn.

Refer 1 friend, get N1000

[You'll get your referral link after you've enrolled]
   </p>
    </div>
    <div className='md:flex-1 w-full'>
    <img src={rename} className='w-[350px] rounded-md m-auto my-4' alt="Jamb Tutors" />
    </div>
   </div>
    </div>
  )
}

export default Bonus
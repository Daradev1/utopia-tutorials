import React from 'react'
import ImageSlider from './Slider'
import utme1 from "../assets/utme1.jpg"
import utme2 from "../assets/utme2.jpg"
import utme3 from "../assets/utme3.jpg"
import utme4 from "../assets/utme4.jpg"
import utme5 from "../assets/utme5.jpg"
import utme6 from "../assets/utme6.jpg"
import EnrollBtn from './EnrollBtn'
import classBenefit from "../assets/classBenefit.jpg"
import classBenefit2 from "../assets/classBenefit2.jpg"
import schApp from "../assets/schApp.jpg"
import CardSection from './Card'
import moreTestimonies from '../assets/moreTestimonies.jpg'
import moreTestimonies2 from '../assets/moreTestimonies2.jpg'
import moreTestimonies3 from '../assets/moreTestimonies3.jpg'
import moreTestimonies4 from '../assets/moreTestimonies4.jpg'
const Utmeimages = [
    utme1,
    utme2,
    utme3,
    utme4,
    utme5,
    utme6,
  ];
  const images = [
    classBenefit,
    classBenefit2,
  ];
  const Testimonies = [
     moreTestimonies,
     moreTestimonies2,
     moreTestimonies3,
     moreTestimonies4,
   ];
const Utme = () => {
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
         <div className="my-10 px-2">
     <h2 className='font-bold text-xl md:text-2xl text-darkPurple text-center'>OUR POST UTME</h2>
     <p className='w-[80%] md:w-[60%] m-auto text-gray-600 text-normal md:text-lg text-center mb-2'>
     Our Post UTME results was fireful🚀
A student at Utopia smashed 29.25/30 in UNILAG Post UTME.
So far in 2024, we have recorded about 21 MBBS admissions and over 80 admissions in total.
<br />
Check the slides below for some of our 2024 POST-UTME testimonials👇
     </p>
     <ImageSlider images={Utmeimages}/>

     <p className=' md:w-[70%] m-auto text-gray-600 text-normal md:text-lg text-center mt-2'>
     Don't you want to also share your testimony when 2025 JAMB results are out?

Let's clarify something in your head now.

🔥When you were viewing those images, you saw that they all mentioned "Utopia". That was actually the secret that helped them score 300+, score high in Post UTME and secured admission.

But how? No panic, just keep following till the end
     </p>
     <h2 className='font-bold text-lg my-3 md:text-2xl text-darkPurple text-center'>
     So, what's this secret UTOPIA all about?
     </h2>
     <p className=' md:w-[70%] m-auto text-gray-600 text-normal md:text-lg text-center mt-2'>
     Utopia Tutorials is a top-notch academic tutorial aimed at helping UTME/JAMB, Post UTME and Nursing students pass their exams and eventually gained admission.

So far in 2024, we have recorded 9 students who smashed 300+ and 87 students scoring between 250 to 299. We have also secured 12 students who got MBBS and about 80+ successful admissions.

This year we're set again to organize the same UTME class that made students from Utopia score 300+. To achieve this we're running our classes in two phases to enable us finish the entire syllabus twice before your exam.
Phase 1 tagged: Revelation Class is N5000 [6th January - 16th March, 2025]
     </p>
     <h2 className='font-bold text-lg my-2 md:text-2xl text-darkPurple text-center'>
      ENROLL NOW
     </h2>
     <p className=' md:w-[70%] m-auto text-gray-600 text-normal md:text-lg text-center mt-2 mb-8'>
     There are two special bonus offer for you towards the end of this page. But you will only get it if you join the UTME class today.

Total Value: N20 000 monthly
Today's Price: N5000 monthly
     </p>
     <div className='w-full justify-center flex'><EnrollBtn text={'Pay Now'} onclick={handleEnroll} /></div>
     </div>
     <p className=' md:w-[70%] m-auto text-gray-600 text-normal md:text-lg text-center mt-2 mb-8'>
     But, is N5000 not too much in this Jagaban's economic era? Well, let's do the calculations together
     <br /> <br />
     See the details about the class below and all you'll be gaining for the N5000 you'll be paying for:👇 <br />
     <br />
     <span className='font-bold text-normal text-gray-700'>✅ 4-HOUR INTENSIVE CLASSES <br /></span>
<span className='font-bold text-normal text-gray-700'>1st Period: 7pm to 9pm <br /></span>
<span className='font-bold text-normal text-gray-700'>2nd Period: 9pm to 11pm. <br /></span>
The 4-hour class is structured to help students understand well. Our tutors teach with mneumonics, short cuts and keypoints. <br />
     </p>
     <p className='text-darkPurple font-bold text-xs text-center m-auto'>Just in case you want to confirm how good our 4- hour daily classes are, you can check some of our class highlights below. 👇</p>
     <div>
   <img src={schApp} alt="my school App" className='w-[350px] mx-auto my-8' />
   <ImageSlider images={images}/>
     </div>
     <CardSection/>
     <p className='text-gray500 px-3 md:w-[60%] m-auto text-center my-10'>
     There are so many more benefits you'll get that can guarantee you 300+ by just joining Utopia UTME Class. We are the best tutorial you can join and our results speak for us.
     Here's jus a few of the results for you to see through👇
     </p>
     <ImageSlider images={Testimonies}/>
    </div>
  )
}

export default Utme
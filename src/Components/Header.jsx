import React from 'react'
import logo from "../assets/logo.jpg"
import EnrollBtn from './EnrollBtn'

const Header = () => {

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
    <div className='bg-white w-full justify-between flex py-2 px-3 top-0 z-50 sticky'>
    <div>
    <img src={logo} alt="Utopia Tutorials" className='w-28' />
    </div>
    {/* <div>
      <Countdown/>
    </div> */}
    <div>
        <EnrollBtn onclick={handleEnroll}  text={"Enroll Now"}/>
    </div>
    </div>
  )
}

export default Header
import React from 'react'
import logo from "../assets/logo.jpg"
import EnrollBtn from './EnrollBtn'
import Countdown from './Countdown'
const Header = () => {
  return (
    <div className='bg-white w-full justify-between flex py-2 px-3 top-0 z-50 sticky'>
    <div>
    <img src={logo} alt="Utopia Tutorials" className='w-28' />
    </div>
    {/* <div>
      <Countdown/>
    </div> */}
    <div>
        <EnrollBtn href="dara.com" text={"Enroll Now"}/>
    </div>
    </div>
  )
}

export default Header
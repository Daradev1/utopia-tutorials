import React from 'react'

const EnrollBtn = ({text, onclick}) => {
  return (
    <div>
    <a onClick={onclick}><button className='py-2 w-28 bg-primaryPurple hover:bg-darkPurple text-white rounded'>{text}</button></a>
    </div>
  )
}

export default EnrollBtn
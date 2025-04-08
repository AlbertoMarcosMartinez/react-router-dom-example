import React from 'react'

const Avatar = () => {
  return (
    <li>      
        <img
          className="image rounded"
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt=""
        />
        <span className="sr-only">Your profile</span>
        <span aria-hidden="true">Alberto Marcos</span>      
    </li>
  )
}

export default Avatar
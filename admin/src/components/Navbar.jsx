import React from 'react'
import {assets} from '../assets/assets.js'
import LogoutButton from './LogoutButton.jsx'


const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%] '>
        <img src={assets.logo} className='w-[max(10%,80px)]' alt="" />
        <LogoutButton setToken={setToken} />
    </div>
  )
}

export default Navbar
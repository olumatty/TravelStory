import React from 'react'
import LOGO from "../src/assets/images/default-monochrome.svg";
import profileInfo from "./Cards/profileInfo";


const Navbar = ({userInfo}) => {
  return (
    <div className='bg-white flex items-center justify-between px-6 py-4 drop-shadow sticky top-0 z-10'>
      <img src ={LOGO} ALT="TRAVEL STORY" className='h-9'/>
      
      <profileInfo userInfo={userInfo} />
    </div>
  )
}

export default Navbar

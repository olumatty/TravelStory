import React from 'react'
import LOGO from "../src/assets/images/default-monochrome.svg";
import ProfileInfo from './Cards/profileInfo';
import { useNavigate } from 'react-router-dom';

const Navbar = ({userInfo}) => {
    const navigate = useNavigate()

    const isToken = localStorage.getItem("token");

    const onLogout = () => {
        localStorage.clear();
        navigate("/")
    }
  return (
    <div className='bg-white flex items-center justify-between px-6 py-4 drop-shadow sticky top-0 z-10'>
      <img src ={LOGO} alt="TRAVEL STORY" className='h-9'/>
      
      {isToken && <ProfileInfo userInfo={userInfo} onLogout={onLogout} />}
    </div>
  )
}

export default Navbar

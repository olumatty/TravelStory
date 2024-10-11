import React from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosinstance';
import { useEffect, useState } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);

  const getUserInfo = async () => {
    try{
      const response = await axiosInstance.get("/get-user");
      if(response.data && response.data.user){
        //Set user info if data exists
        setUserInfo(response.data.user);
      }
    } catch(error){
      if(error.data && response.data.user){
        //Clear storage if unauthorized
        localStorage.clear();
        navigate("/"); // Redirect to login 
      }
    }
  }

  useEffect(() => {
    getUserInfo()
    return () => {}
  }, [])
  
  return (
    <div>
      <Navbar userInfo= {userInfo}/>
    </div>
  )
}

export default Home

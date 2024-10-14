import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosinstance";
import { useEffect, useState } from "react";
import TravelCard from "../../components/Cards/TravelCard";

const Home = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState("");
  const [allStories, setAllStories] = useState([]);

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        //Set user info if data exists
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.data && response.data.user) {
        //Clear storage if unauthorized
        localStorage.clear();
        navigate("/"); // Redirect to login
      }
    }
  };

  const getAllTravelStories = async () => {
    try {
      const response = await axiosInstance.get("/get-travel-story");

      if (response.data && response.data.stories) {
        setAllStories(response.data.stories);
      }
    } catch (error) {
      console.log("An unexpected error occcured. Please try again");
    }
  };

  //Handle Edit story click
  const handleEdit = (data) => {

  }

  //handle view story
  const handleViewStory = (data) => {
  }

  //handle favourite stories
  const updateIsFavourite = (storyData) => {

  }

  useEffect(() => {
    getAllTravelStories();
    getUserInfo();
    return () => {};
  }, []);

  return (
    <>
      <Navbar userInfo={userInfo} />

      <div className="container mx-auto py-10 ">
        <div className="flex gap-7">
          <div className="flex-1">
            {allStories.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {allStories.map((item) => {
                  return (
                    <TravelCard
                      key={item._id}
                      imgUrl={item.imageUrl}
                      title={item.title}
                      story={user.story}
                      date={user.visitedDate}
                      isFavourite={item.isFavourite}
                      onEdit={() => handleEdit(item)}
                      onClick={() => handleViewStory(item)}
                      onFavourite={() => updateIsFavourite(item)}
                    />
                  );
                })}
              </div>
            ) : (
              <>Empty Card </>
            )}
          </div>

          <div className="w-[320px]"></div>
        </div>
      </div>
    </>
  );
};

export default Home;

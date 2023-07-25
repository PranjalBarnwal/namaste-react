import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { restaurantList } from "./config";
import { Card } from "./Card";
import RestaurantMenu from "./RestaurantMenu";
import useOnline from "./../utils/useOnline"

export const Body = () => {
  const [inputText, setInputText] = useState("");
  const [restaurantData, setRestaurantData] = useState("");
  const [filteredData, setFilteredData] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
 );
      const json = await data.json();
      setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredData(json?.data?.cards[2]?.data?.data?.cards);
      // console.log(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  function filterData(restaurantData, inputText) {
    const data = restaurantData.filter((restaurant) => {
      return restaurant.data.name
        .toLowerCase()
        .includes(inputText.toLowerCase());
    });
    return data;
  }

  const setInputHandler = (e) => {
    setInputText(e.target.value);
  };

  //checking if user's internet is active
  const isOnline=useOnline();
  if(!isOnline) return <h1>Please check your internet connection</h1>
 
  return (
    <>
      <input
        type="text"
        name=""
        value={inputText}
        id=""
        onChange={setInputHandler}
      />
      <button
        onClick={() => {
          const data = filterData(restaurantData, inputText);
          setFilteredData(data);

          setInputText("");
        }}
      >
        Search
      </button>

      {restaurantData&&restaurantData.length !== 0 ? (
        <div className="body">
          {filteredData.length !== 0 ? (
            filteredData.map((restaurant) => (
              <Link to={"/restaurantMenu/"+restaurant.data.id} key={restaurant.data.id}><div >
              <Card {...restaurant.data} />
              </div>
              </Link>
            ))
          ) : (
            <h2>No Restaurant Found</h2>
          )}
        </div>
      ) : (
        <div className="shimmerContainer">
             { Array(20).fill("").map((e,index) =>  <div key={index}> <Shimmer /></div>)}         
        </div>
      )}
    </>
  );
};

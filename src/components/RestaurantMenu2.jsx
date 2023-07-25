import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetRestaurant from "../utils/useGetRestaurant";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useGetRestaurant(resId);

  return !restaurant ? (
    <div className="shimmerContainer">
      {Array(20)
        .fill()
        .map((e, index) => (
          <div key={index}>
            <Shimmer />
          </div>
        ))}
    </div>
  ) : (
    <div>
      <h1>{restaurant?.name}</h1>

      <h1>{restaurant?.avgRatingString}</h1>

      <h1>{restaurant?.costForTwoMessage}</h1>

      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant?.cloudinaryImageId}`}
        alt=""
      />
    </div>
  );
};

export default RestaurantMenu;

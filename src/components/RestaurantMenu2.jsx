import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useGetRestaurant from "../utils/useGetRestaurant";
import cartSlice, { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import store from "../utils/store";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { restaurant, menuList } = useGetRestaurant(resId);

  const dispatch=useDispatch();

  const addFood=(item)=>{
    dispatch(addItem(item));
   
  }

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
      <ul>
       
        {menuList &&
          menuList.map((item, index) => {
            return (<li key={item.card.info.id}>{item.card.info.name}- 
              ₹{item.card.info.price/100}------- <button onClick={() => addFood(item)}>Add</button></li> 
              );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

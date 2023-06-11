import React, { useState } from "react";

import { restaurantList } from "./config";
import { Card } from "./Card";
export const Body = () => {
  const [inputText, setInputText] = useState("");

  function filterData(restaurantData, inputText) {
    const data = restaurantData.filter((restaurant) => {
      return restaurant.data.name.includes(inputText);
    });
    return data;
  }
  
  const setInputHandler = (e) => {
    setInputText(e.target.value);
  };
  const [restaurantData, setRestaurantData] = useState(restaurantList);

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
          setRestaurantData(restaurantList)
          const data = filterData(restaurantData, inputText);
          setRestaurantData(data);
          console.log(data);
          setInputText("");
        }}
      >
        Search
      </button>
      <div className="body">
        {restaurantData.map((restaurant) => {
          return <Card {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};

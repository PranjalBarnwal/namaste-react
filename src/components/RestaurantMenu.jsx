import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resName, setResName] = useState();
  const [resImg, setResImg] = useState();
  const [resRating, setResRating] = useState();
  const [resCostFor2, setResCostFor2] = useState();
  // const [resMenu,setResMenu]=useState();
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.593192&lng=85.1851427&restaurantId=" +
      resId
      );
      const json = await data.json();
      // console.log(json);
      const { name, cloudinaryImageId, avgRatingString, costForTwoMessage } =
      json.data?.cards[0]?.card?.card?.info;
      
      // console.log(json.data?.cards[0]?.card?.card?.info);
      const menu=json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((menuItems,index)=> index&&menuItems?.card?.card?.itemCards);
      console.log(menu);
      const menuData=json.data?.cards[0]?.card?.card?.info;
      // const menuDataArr=Object.keys(menuDataObj)
      setResName(name);
      setResImg(
        `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`
        );
        setResRating(avgRatingString);
        setResCostFor2(costForTwoMessage);
      }
      
   
      return (!resName)?<div className="shimmerContainer">
  { Array(20).fill("").map((e,index) =>  <div key={index}> <Shimmer /></div>)}      
  {/* what is the use of e , is it for api data fetching??!!!   */}
</div>:(
    <div>
      <h1>hellooooo</h1>
      <h1>{resName}</h1>
      <img src={resImg} alt="" />
      <h1>{resRating}</h1>
      <h1>{resCostFor2}</h1>
    </div>
  );
};

export default RestaurantMenu;


import { useEffect, useState } from "react";

const useGetRestaurant = (resId) => {
  
  const [restaurant, setRestaurant] = useState(null);
  const [menuList, setMenuList] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.593192&lng=85.1851427&restaurantId=" +
        resId
    );
    const json = await data.json();
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    setMenuList(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
   

  }

  return {restaurant,menuList};
};

export default useGetRestaurant;
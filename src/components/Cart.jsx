import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.log(items);
  return (
    <div>
      <h2>Items in cart</h2>
      {items.map((item,index) => 
        <div key={index}>{item?.card?.info?.name}</div>
      )}
    </div>
  );
};

export default Cart;

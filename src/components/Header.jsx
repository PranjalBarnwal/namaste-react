import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";
import store from "../utils/store";


export const Header = () => {
  const {user}=useContext(UserContext);
  const [isLogged, setIsLogged] = useState(false);
  const isOnline = useOnline();
  const cartItems=useSelector(store=>store.cart.items);
console.log(cartItems);



  return (
    <>
      <div className="container">
        <Title />

        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/instamart">Instamart</Link>
            </li>
            <li>Cart-{cartItems.length}</li>
            <li>{isOnline ? "✅" : "❌"}</li>
          </ul>
        </div>
        <h4>{user.name}</h4>
        <h4>{user.email}</h4>
        {isLogged ? (
          <button
            onClick={() => {
              setIsLogged(!isLogged);
            }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLogged(!isLogged);
            }}
          >
            Log In
          </button>
        )}
      </div>
    </>
  );
};
const Title = () => {
  return (
    <img
      className="logo"
      src="data:image/jpeg;base64,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"
      alt=""
    />
  );
};

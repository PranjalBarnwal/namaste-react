import UserContext from "../utils/UserContext";
import { useContext } from "react";
import React from 'react'

const Footer = () => {
    const {user}=useContext(UserContext)
  return (
    <div>
        <h3>this website is created by</h3>
      {user.name}
    </div>
  )
}

export default Footer;


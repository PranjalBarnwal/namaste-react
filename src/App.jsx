import React, { useState } from "react";
import "./App.css";
import { restaurantList } from "./components/config";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div>
      <AppLayout />
    </div>
  );
};








const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
export default App;

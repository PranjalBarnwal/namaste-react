import React, { useState } from "react";
import "./App.css";
import { restaurantList } from "./components/config";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
const App = () => {
  return (
    <div className="App">
      <AppLayout />
    </div>
  );
};
export default App;

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurantMenu/:resId",
        element:<RestaurantMenu/>
      }
    ],
  },
]);
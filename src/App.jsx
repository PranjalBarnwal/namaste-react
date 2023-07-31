import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { restaurantList } from "./components/config";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import RestaurantMenu2 from "./components/RestaurantMenu2";
import store from "./utils/store";
import UserContext from "./utils/UserContext";
//lazy loading
const Instamart = lazy(() => import("./components/Instamart"));
//react suspends the loading upon on demand render

const App = () => {
  return (
    <div className="App">
        <AppLayout />
      </div>
  );
};
export default App;

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Robin Singh",
    email: "44robin.rs@gmail.com",
  });
  return (
      <Provider store={store}>
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
      </Provider>
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
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/restaurantMenu/:resId",
        element: <RestaurantMenu2 />,
      },
    ],
  },
]);

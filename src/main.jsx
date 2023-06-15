
import React from 'react'
import ReactDOM from "react-dom/client"
import App from "./App"
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './App';
const root =document.getElementById("root");
ReactDOM.createRoot(root).render(
 <RouterProvider router={appRouter}/>
)
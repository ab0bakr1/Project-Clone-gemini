import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Pages/Home';
import ContextProvider from './Context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
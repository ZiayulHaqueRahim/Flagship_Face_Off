import { createBrowserRouter } from "react-router";
import Favourites from "../Components/Favourites";


import HomePage from "../Pages/HomePage";
import MainLayout from "../Layouts/MainLayout";

import Error from "../Pages/Error";
import AboutPage from "../Pages/AboutPage";

import Cart from "../Components/Cart";
import PhoneDetails from "../Pages/PhoneDetails";

const router =  createBrowserRouter([
    {
      path:'/',
    
      Component: MainLayout,
      errorElement:<Error/>,
      children: [
        {
            path:'/',
            Component: HomePage,
            hydrateFallbackElement: <p>loading</p>,
            loader: ()=>fetch('phones.json'),
        },
        {
          path: '/about',
          Component: AboutPage,
        },
         {
          path: '/cart',
          Component: Cart,
         },

        {
          path: '/favourites',
          Component: Favourites,
        },
        {
          path: '/details',
          Component: PhoneDetails,
        },
       
      ]
    },
  ])
  

export default router;
import { useState } from 'react'

import './../src/main'
import { createBrowserRouter, createHashRouter, Outlet, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import AuthContextProvider from './Components/Context/AuthContext'
import Home from './Components/Home/Home';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CartContextProvider from './Components/Context/CartContext';
import { Toaster } from 'react-hot-toast'
import Cart from './Components/Cart/Cart';
import Order from './Components/Order/Order';
import { Offline, Online } from "react-detect-offline";
import WishList from './Components/WishList/WishList';
import AllOrders from './Components/AllOrders/AllOrders';

const client = new QueryClient()
const router = createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'home', element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute> <Categories /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute> <Brands /> </ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute> <Cart /></ProtectedRoute> },
      { path: 'wishlist', element: <ProtectedRoute> <WishList /></ProtectedRoute> },
      { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute> <Products /></ProtectedRoute> },
      { path: 'order', element: <ProtectedRoute> <Order /></ProtectedRoute> },
      { path: 'allorders', element: <ProtectedRoute> <AllOrders /></ProtectedRoute> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <Notfound /> }
    ]
  },


])




function App() {

  return (
    <>

      <QueryClientProvider client={client}>

        <AuthContextProvider >
          <CartContextProvider>

            <RouterProvider router={router} />
            <Toaster />
          </CartContextProvider>
        </AuthContextProvider>

      </QueryClientProvider>



      <Offline>

        <div className="bg-red-300  p-5 fixed text-red-500 bottom-0 start-5 end-0">

          <h1>Please Check Your Internet Connection</h1>

        </div>

      </Offline>

    </>
  )
}

export default App

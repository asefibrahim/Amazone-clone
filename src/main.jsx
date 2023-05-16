import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import { cartProductLoader } from './Loader/CardProductsLoader';
import CheckOut from './components/CheckOut/CheckOut';
import Signup from './components/SIgnup/Signup';
import TheAuthProviders from './components/Providers/TheAuthProviders';
import PrivateRoute from './components/PrivateRouts/PrivateRoute';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
        loader: () => fetch('http://localhost:5000/productsTotal')
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductLoader
      },
      {
        path: 'inventory',
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'checkout',
        element: <PrivateRoute> <CheckOut></CheckOut></PrivateRoute>
      }, {


        path: '/signup',
        element: <Signup></Signup>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TheAuthProviders>
      <RouterProvider router={router} />
    </TheAuthProviders>
  </React.StrictMode>,
)

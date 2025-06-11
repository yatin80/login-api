
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Form from '../pages/Form'
import CommonLayout from '../layout/CommonLayout'
import AuthLayout from '../layout/AuthLayout'
import SignIn from '../pages/SignIn'
import Products from '../pages/products/Products'
import ProductDetails from '../pages/products/ProductDetails'
import SignUp from '../pages/SignUp'
import ProtectedRoute from './ProtectedRoute'
import Contact from '../pages/Contact'
import Cart from '../pages/products/Cart'

export default function Router() {

    const BrowserRouter = createBrowserRouter([
        {
            path: '/',
            element: <CommonLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                }
            ]
        },
        {
            path: '/',
            element: <AuthLayout />,
            children: [

                {
                    path: '/sign-in',
                    element: <SignIn />
                },
                {
                    path: '/signup',
                    element: <SignUp />
                },


            ]
        },
        {
            path: '/',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/',
                    element: <CommonLayout />,
                    children: [

                        {
                            path: '/about',
                            element: <About />
                        },
                        {
                            path: '/products',
                            element: <Products />
                        },
                        {
                            path: '/products/:id',
                            element: <ProductDetails />
                        },
                        {
                            path: '/cart',
                            element:<Cart />
                        },
                        {
                            path: '/contact',
                            element: <Contact />
                        },
                    ]
                }
            ]
        },



    ])

    return (
        <RouterProvider router={BrowserRouter} />
    )
}

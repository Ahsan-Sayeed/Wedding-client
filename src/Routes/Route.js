import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import MyReviews from '../Pages/MyReviews/MyReviews';
import NotFound from '../Pages/NotFound/NotFound';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import ServicePage from '../Pages/ServicePage/ServicePage';
import ServicesPage from '../Pages/ServicesPage/ServicesPage';
import PrivateRoute from './PrivateRoute';

const Route = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/service',
                element: <PrivateRoute><ServicePage/></PrivateRoute>
            },
            {
                path:'/services',
                element: <ServicesPage/>
            },
            {
                path:'/services/:id',
                element: <ServiceDetails/>
            },
            {
                path:'/review',
                element: <PrivateRoute><MyReviews/></PrivateRoute>
            }
        ]
    },
    {
        path:'*',
        element: <NotFound/>
    }
]);

export default Route;
import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import MyReviews from '../Pages/MyReviews/MyReviews';
import NotFound from '../Pages/NotFound/NotFound';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';

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
                path:'/services/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path:'/review',
                element: <MyReviews/>
            }
        ]
    },
    {
        path:'*',
        element: <NotFound/>
    }
]);

export default Route;
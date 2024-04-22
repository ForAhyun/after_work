import React from 'react';
import {createBrowserRouter} from 'react-router-dom'
import List from '../pages/List';
import Rating from '../pages/Rating';


const router = createBrowserRouter([
    {
        path: "/",
        element: <List/>,
    },
    {
        path: "/rating/:id",
        element: <Rating/>
    },
]);

export default router;
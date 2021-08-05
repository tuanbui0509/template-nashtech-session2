import React from 'react';
import Home from '../pages/Home'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '',
        exact: false,
        // main: () => <NotFoundPage />
    }
];

export default routes;
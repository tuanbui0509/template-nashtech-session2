import React from 'react';
import Home from '../pages/Home'
import ManageUser from '../pages/ManageUser'
import ManageAssignment from '../pages/ManageAssignment'
import ManageAsset from '../pages/ManageAsset'
import Report from '../pages/Report'
import Request from '../pages/Request'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/manage-user',
        exact: false,
        main: () => <ManageUser />
    }

    ,
    {
        path: '/manage-asset',
        exact: false,
        main: () => <ManageAsset />
    }
    ,
    {
        path: '/manage-assignment',
        exact: false,
        main: () => <ManageAssignment />
    }
    ,
    {
        path: '/report',
        exact: false,
        main: () => <Report />
    },
    {
        path: '/request',
        exact: false,
        main: () => <Request />
    },
    {
        path: '',
        exact: false,
        // main: () => <NotFoundPage />
    }
];

export default routes;
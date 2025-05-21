import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-11/12 mx-auto' >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;
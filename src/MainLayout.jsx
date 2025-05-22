import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router';
import Footer from './Components/Footer';
import Banner from './Components/Banner';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            {/* <Banner></Banner> */}
            <div className='w-11/12 mx-auto' >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import GardenEvent from './GardenEvent';
import ActiveGardener from './ActiveGardener';
import Banner from './Banner';


const Home = () => {
    // const [data, setData] = useState({})
    const gardeners = useLoaderData();
    console.log(gardeners);
    const activeGardeners = gardeners.filter(gardener=>gardener.status == "Active");
    console.log(activeGardeners)

    

    return (
        <div>
        <Banner></Banner>
            <GardenEvent></GardenEvent>
            <div className='my-5 grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto' >

                {
                    activeGardeners.map(gardener => <ActiveGardener gardener={gardener} ></ActiveGardener>)
                }
            </div>
            


        </div>
    );
};

export default Home;
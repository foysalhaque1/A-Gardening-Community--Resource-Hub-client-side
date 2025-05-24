// import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import GardenEvent from './GardenEvent';
import ActiveGardener from './ActiveGardener';
import Banner from './Banner';
import TrendingTips from './TrendingTips';
import ExtraSection1 from './ExtraSection1';
import ExtraSection2 from './ExtraSection2';
import Images from './Images';


const Home = () => {
    // const [data, setData] = useState({})
    const gardeners = useLoaderData();
    console.log(gardeners);
    const activeGardeners = gardeners.filter(gardener=>gardener.status == "Active");
    console.log(activeGardeners)

    

    return (
        <div>
        <Images></Images>
            {/* <GardenEvent></GardenEvent> */}
            <div className='my-5 grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto' >

                {
                    activeGardeners.map(gardener => <ActiveGardener gardener={gardener} ></ActiveGardener>)
                }
            </div>
            <TrendingTips></TrendingTips>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>



        </div>
    );
};

export default Home;
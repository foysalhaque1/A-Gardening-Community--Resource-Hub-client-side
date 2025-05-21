import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import EventCard from './EventCard';
import Marquee from 'react-fast-marquee';

const GardenEvent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('../../public/events.json').then(res => res.json())
            .then(data => {
                setData(data)
            }).catch(error => {
                console.log(error)
            })
    }, [])
    // const event = useLoaderData();
    // console.log(event)
    return (
        <div className='my-3.5'>
            <Marquee>

                <div className='flex gap-4 justify-center' >

                    {
                        data.map(ev => <EventCard ev={ev} key={ev.location}></EventCard>)
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default GardenEvent;
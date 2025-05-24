import React, { useEffect, useState } from 'react';

const TrendingTips = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://assignment-10-server-side-rosy.vercel.app/tips/trending/sixTips')
            .then(res => res.json()).then(data => setData(data)).catch(error => console.log(error))
    }, []
    )
    console.log(data)
    return (
        <div className='my-16 '>
            <h2 className='text-2xl text-white font-bold text-center' >Trending Tips For Gardening</h2>
            {
                <div className='my-5 grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto p-6' >

                    {
                        data.map(user => 
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src={user.photo}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">Title:  {user.Title}</h2>
                                    <p>Level: {user.level}</p>
                                    <p>Category: {user.Category}</p>
                                    <p>Plant-Type: {user.PlantType}</p>
                                    <p>Condition: {user.condition}</p>
                                    <p>Description: {user.description}</p>


                                </div>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    );
};

export default TrendingTips;
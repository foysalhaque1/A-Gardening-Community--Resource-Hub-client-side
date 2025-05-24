import React from 'react';
import { useLoaderData } from 'react-router';

const ExploreGardeners = () => {
    const data = useLoaderData();
    console.log(data);

    fetch('https://assignment-10-server-side-rosy.vercel.app/gardeners', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => {
            console.log(data)
        })


    return (
        <div>
            <div className='my-5 grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto' >

                {
                    data.map(user => <div>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={user.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">Name:  {user.name}</h2>
                                <p>Age: {user.age}</p>
                                <p>Gender: {user.gender}</p>
                                <p>Status: {user.status}</p>
                                <p>Experience: {user.experiences}</p>
                                <p>Total Tips: {user.total_shared_tips}</p>


                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ExploreGardeners;
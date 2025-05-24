import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const TipsDetailsPage = () => {
    const data = useLoaderData();
    const [like, setLike] = useState(0);
    const handleClick = () => {
        setLike(like + 1);
        const info = {
            count: 1
        }
        fetch('https://assignment-10-server-side-rosy.vercel.app/tips/like', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({info})
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
    }
    console.log(data)
    return (
        <div className='relative'>
            <div className='absolute right-2 top-0.5 flex items-center gap-2'>

                <button onClick={handleClick} className='btn btn-primary'><FaThumbsUp></FaThumbsUp> Like-{like} </button>


            </div>
            <div className="hero bg-green-300 min-h-screen">


                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={data.photo}
                        className="w-full rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Deatils of tips!</h1>
                        <div className="card-body">
                            <h2 className="card-title font-bold">Title:  {data.Title}</h2>
                            <p>Level: {data.level}</p>
                            <p>Category: {data.Category}</p>
                            <p>Plant-Type: {data.PlantType}</p>
                            <p>Condition: {data.condition}</p>
                            <p>Description: {data.description}</p>
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipsDetailsPage;
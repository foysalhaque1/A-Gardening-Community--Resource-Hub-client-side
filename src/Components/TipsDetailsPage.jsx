import React from 'react';
import { useLoaderData } from 'react-router';

const TipsDetailsPage = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
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
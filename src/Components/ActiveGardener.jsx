import React from 'react';

const ActiveGardener = ({ gardener }) => {
   // console.log(gardener)
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={gardener.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Name:  {gardener.name}</h2>
                    <p>Age: {gardener.age}</p>
                    <p>Gender: {gardener.gender}</p>
                    <p>Status: {gardener.status}</p>
                    <p>Experience: {gardener.experiences}</p>
                    <p>Total Tips: {gardener.total_shared_tips}</p>

                    
                </div>
            </div>
        </div>
    );
};

export default ActiveGardener;
import React from 'react';

const EventCard = ({ev}) => {
    return (
       
            <div key={ev.location} className="card bg-base-100 image-full w-96 shadow-sm">
                        <figure>
                            <img
                                src={ev.img}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Event name: {ev.eventName}</h2>
                            <p>Location: {ev.location}</p>
                            <p>Time: {ev.time}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">More About</button>
                            </div>
                        </div>
                    </div>
       
    );
};

export default EventCard;
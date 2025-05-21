import React from 'react';
import { useLoaderData } from 'react-router';

const ExploreGardeners = () => {
    const data = useLoaderData();
    console.log(data);
    
    fetch('http://localhost:4000/gardeners',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
    })


    return (
        <div>
            
        </div>
    );
};

export default ExploreGardeners;
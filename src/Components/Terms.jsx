import React from 'react';
import Header from './Header';

const Terms = () => {
    return (
         <div >
            
            <div className='w-11/12 mx-auto'>
            <div className='text-center my-5'>

            <h2 className='text-xl font-bold'>User Conduct</h2>
            <p>Specifies acceptable and unacceptable behavior within the app,<br /> such as restrictions on content, spam, and harassmen</p>
            </div>
            <div className='text-center my-5'>

            <h2 className='text-xl font-bold'>Liability Limits:</h2>
            <p>Defines the extent of the developer's responsibility for issues <br /> like errors, defects, or damages caused by the ap</p>
            </div>
            <div className='text-center my-5'>

            <h2 className='text-xl font-bold'>Intellectual Propertyt</h2>
            <p>Protects the developer's copyright and other intellectual property rights <br /> associated with the app and its conten</p>
            </div>
            <div className='text-center my-5'>

            <h2 className='text-xl font-bold'>Payment and Subscription Details</h2>
            <p>Outlines payment terms, refund policies, and other financial aspects if applicablen</p>
            </div>

            </div>
            
        </div>
    );
};

export default Terms;
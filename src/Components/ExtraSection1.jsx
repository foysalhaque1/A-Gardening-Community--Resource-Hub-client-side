import React from 'react';

const ExtraSection1 = () => {
    return (
        <div className='mt-20 text-center mb-16 bg-green-400 p-8' >

            <h2 className='text-5xl font-bold ' >Turn your home into a Greenhouse!</h2>
            <p className='mt-10 text-2xl mb-10'> The name “greenhouse” stuck because these structures help plants stay green and healthy. It connects to the idea that these places are like a special house for plants.</p>
            <div className='flex justify-center gap-20 mt-10  ' >
                <div className='text-center'>

                    <img className='mx-auto' src='https://dtgardening.wpengine.com/wp-content/uploads/2016/12/img-cap4.jpg' alt="" />
                    <div className='mt-5'>

                        <h2 className='text-2xl font-bold mb-3.5 mt-6' >Choose your framing material</h2>
                        <p>Homeowners can choose from a variety of <br /> materials to frame their greenhouse.</p>
                    </div>
                </div>
                <div className='text-center'>

                    <img className='mx-auto' src='https://dtgardening.wpengine.com/wp-content/uploads/2016/12/img-cap5.jpg' alt="" />
                    <div className='mt-5'>

                        <h2 className='text-2xl font-bold mb-3.5 mt-6' >Choose a location</h2>
                        <p>Choosing a location is probably the most <br /> important factor influencing the <br /> success of a greenhouse project.</p>
                    </div>
                </div>
                <div className='text-center'>

                    <img className='mx-auto' src='https://dtgardening.wpengine.com/wp-content/uploads/2016/12/img-cap6.jpg' alt="" />
                    <div className='mt-5'>

                        <h2 className='text-2xl font-bold mb-3.5 mt-6' >Create raised beds</h2>
                        <p>There are many benefits to raised bed gardening,<br /> such as good drainage and better accessibility</p>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-1'>
                <h2 className='text-3xl font-bold mb-4 my-5'>Why should you build a greenhouse?</h2>
                <p className='my-6'>The main reason why you would want to build a greenhouse is to garden even outside of the typical growing season, as the greenhouse protects your plants from the elements.</p>
                <div className='flex gap-4 my-14'  >
                    <div className='border-2 p-3 '>

                        <h2 className='text-2xl text-blue-700 font-bold'>Energy efficiency</h2>
                        <p>Takes advantage of the environmental conditions,<br /> such as optimizing the heat inside the greenhouse.</p>
                    </div>
                    <div className='border-2 p-3 '>

                        <h2 className='text-2xl text-blue-700 font-bold'>Control of microclimate</h2>
                        <p>One of the main advantages of a greenhouse is to <br /> control and establish the optimal environment for cultivation.</p>
                    </div>
                    <div className='border-2 p-3 '>

                        <h2 className='text-2xl text-blue-700 font-bold'>Protection against diseases</h2>
                        <p> pests and other vermin. Another advantage of a <br /> greenhouse is that it is very difficult to enter as it is a closed space.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;
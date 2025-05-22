import React from 'react';

const ExtraSection2 = () => {
    return (
        <div className='my-36 bg-green-200 p-8 '>
            <h2 className='text-5xl font-bold text-center mb-24'>Technique of gardening</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-52'>
                <div className="">
                    <figure>
                        <img className='w-[1000px]'
                            src="https://img.freepik.com/free-photo/young-woman-controlling-plantation_1150-10380.jpg?
uid=R201281551&ga=GA1.1.879106373.1747835804&semt=ais_hybrid&w=740"
                            alt="Movie" />
                    </figure>

                </div>
                <div className='flex flex-col justify-around'>

                <div className='flex items-center'>
                    <img className='w-16 h-16' src="https://dtgardening.wpengine.com/wp-content/uploads/2016/11/bulb.png" alt="" />
                    <div>
                    <h2 className='text-green-500 font-bold'>Innovative Solutions</h2>
                    <p>Innovative gardening solutions range from using technology and automation to employing creative techniques and eco-friendly practices. Smart gardening systems, vertical gardening, and composting are just a few examples of how gardeners are finding new ways to make their gardens more efficient, sustainable, and visually appealing</p>

                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='w-16 h-16' src="https://dtgardening.wpengine.com/wp-content/uploads/2016/11/scissor.png" alt="" />
                     <div>
                    <h2 className='text-green-500 font-bold'>Crafty Hands</h2>
                    <p>Crafting in the garden can be a fun and rewarding way to personalize your outdoor space and add unique touches. Upcycle old pallets or crates into vertical planters to maximize space and add visual interest. </p>

                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='w-16 h-16' src="https://dtgardening.wpengine.com/wp-content/uploads/2016/11/hand.png" alt="" />
                    <div>
                    <h2 className='text-green-500 font-bold'>Seeds & Weeds</h2>
                    <p>managing weeds and their seeds is important for successful gardening. Weeds spread through seeds, some easily dispersed by wind, water, or soil. Preventing weeds involves mulching, preventing weeds from going to seed, and potentially using weed barrier fabric or cardboard </p>

                    </div>
                </div>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection2;
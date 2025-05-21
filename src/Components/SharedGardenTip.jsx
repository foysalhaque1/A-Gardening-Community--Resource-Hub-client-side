import React from 'react';

const SharedGardenTip = () => {
    return (
        <div>
            <div className='p-24' >
                <div  >
                    <h1 className="text-6xl p-12 text-center">Shared Garden Tips</h1>

                </div>
                <form  >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6' >
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Title</label>
                            <input type="text" name='Title' className="input" placeholder="Enter Title" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Plant-Type</label>
                            <input type="text" name='PlantType' className="input" placeholder="Enter Plant-Type" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Level</label>
                            <select defaultValue="Pick a level" className="select">
                                <option disabled={true}>Pick a color</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Difficult</option>
                            </select>



                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Category</label>
                            <input type="text" name='Category' className="input" placeholder="Enter Category" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Description</label>
                            <textarea className="textarea" placeholder="Description"></textarea>


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Availability</label>
                             <select defaultValue="Pick a level" className="select">
                                <option disabled={true}>Availability</option>
                                <option>Public</option>
                                <option>Hidden</option>
                               
                            </select>


                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">


                        <label className="label">photo</label>
                        <input type="text" name='photo' className="input w-full " placeholder="photo url" />


                    </fieldset>
                    <input type="submit" value="Add coffee" className='w-full btn ' />
                </form>
            </div>
        </div>
    );
};

export default SharedGardenTip;
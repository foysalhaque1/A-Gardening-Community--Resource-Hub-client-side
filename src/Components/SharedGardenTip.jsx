import React, { use } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import Swal from 'sweetalert2';

const SharedGardenTip = () => {
    const { user } = use(AuthContext)
    console.log(user)
    const formSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // const email = form.email.value;
        // console.log(email)
        const formData = new FormData(form);
        const { email, ...rest } = Object.fromEntries(formData.entries());
        const userProfile = {
            email,
            ...rest
        }
        console.log(userProfile);
        fetch('https://assignment-10-server-side-rosy.vercel.app/tips', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfile)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Tip is Submitted Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className='p-24' >
                <div  >
                    <h1 className="text-6xl p-12 text-center">Shared Garden Tips</h1>

                </div>
                <form onSubmit={formSubmit}  >
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
                            <select name='level' defaultValue="Pick a level" className="select">
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
                            <textarea name='description' className="textarea" placeholder="Description"></textarea>


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Availability</label>
                            <select name='condition' defaultValue="Pick a level" className="select">
                                <option disabled={true}>Availability</option>
                                <option>Public</option>
                                <option>Hidden</option>

                            </select>


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Email</label>
                            <input type="email" value={user && user.email} readOnly name='email' className="input font-bold text-black" placeholder="Enter Plant-Type" />


                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">


                            <label className="label">Name</label>
                            <input type="text" value={user && user.displayName} readOnly name='name' className="input font-bold text-black" placeholder="Enter Plant-Type" />


                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">


                        <label className="label">photo</label>
                        <input type="text" name='photo' className="input w-full " placeholder="photo url" />


                    </fieldset>
                    <input type="submit" value="Submit" className='w-full btn ' />
                </form>
            </div>
        </div>
    );
};

export default SharedGardenTip;
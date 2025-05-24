import React, {  useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

import Swal from 'sweetalert2';

const BrowseTip = () => {

    const data = useLoaderData();
    const [selectTips, setSelectTips] = useState([]);
    // const promise = fetch('http://localhost:4000/tips/selectlevel/Easy').then(res=>res.json())
    // // const dat = use(promise);
    // // console.log(dat)
    //  useEffect(()=>{
    //         fetch('http://localhost:4000/tips/selectlevel/Easy').then(res=>res.json())
    //         .then(data=>setEasyData(data))
    //     })

    // console.log(easyData)
    // const publicTips = data.filter(pubData => pubData.condition == "Public")
    useEffect(() => {
        const publicTips = data.filter(pubData => pubData.condition == "Public");
        setSelectTips(publicTips)
    }, [data])
    // setSelectTips(publicTips);
    // const [publicTips,setPublicTips] = useState(initialPublicTips)
    //console.log(publicTips);
    const handleEasy = () => {

        fetch('http://localhost:4000/tips/selectlevel/Easy').then(res => res.json())
            .then(data => setSelectTips(data));
        }
    const handleMedium = () => {

        fetch('http://localhost:4000/tips/selectlevel/Medium').then(res => res.json())
            .then(data => setSelectTips(data));
        }
    const handleDifficult = () => {

        fetch('http://localhost:4000/tips/selectlevel/Difficult').then(res => res.json())
            .then(data => setSelectTips(data));
        }





    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-blue-500'>
                                No
                            </th>
                            <th className='text-blue-500' >Image</th>
                            <th className='text-blue-500' >Title</th>
                            <th className='text-blue-500'>Category</th>
                            <th className='text-blue-500'>Status</th>
                            <th className='text-blue-500'>Level</th>
                            <div className='flex gap-2.5 mt-2.5'>
                                <div>
                                    <input onClick={handleEasy} type="radio" name="topping" id="Easy" />
                                    <label htmlFor='Easy'>Easy</label>
                                </div>
                                <div>
                                    <input onClick={handleMedium} type="radio" name="topping" id="medium" />
                                    <label htmlFor='Easy'>Medium</label>
                                </div>
                                <div>
                                    <input onClick={handleDifficult} type="radio" name="topping" id="difficult" />
                                    <label htmlFor='Easy'>Difficult</label>
                                </div>
                            </div>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectTips.map((user, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {user.Title}
                                </td>
                                <td>{user.Category}</td>
                                <td>{user.condition}</td>
                                <td>{user.level}</td>
                                <th className='space-x-3'>
                                    <Link to={`/tipsDetails/${user._id}`} ><button className="btn  btn-xs">See More</button></Link>


                                </th>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default BrowseTip;
import React from 'react';
import { useLoaderData } from 'react-router';
import BrowseTipTable from './BrowseTipTable';

const BrowseTip = () => {
    const data = useLoaderData();
    console.log(data)
    const publicTips = data.filter(pubData => pubData.condition == "Public")
    console.log(publicTips)
    return (
        <div>

          <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Image</th>
                            <th>Phone no</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            publicTips.map((user, index) => <tr>
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
                                <td>s
                                    {user.Title}
                                </td>
                                <td>{user.Category}</td>
                                <th className='space-x-3'>
                                    <button className="btn  btn-xs">View Details</button>
                                    <button className="btn  btn-xs">Edit</button>
                                    {/* <button onClick={() => handleDelete(user._id)} className="btn  btn-xs">X</button> */}
                                </th>
                            </tr>)
                        }
                        {/* row 2 */}

                        {/* row 3 */}

                        {/* row 4 */}

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default BrowseTip;
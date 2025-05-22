import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import BrowseTipTable from './BrowseTipTable';
import Swal from 'sweetalert2';

const BrowseTip = () => {
    const data = useLoaderData();
    console.log(data)
    const initialPublicTips = data.filter(pubData => pubData.condition == "Public")
    const [publicTips,setPublicTips] = useState(initialPublicTips)
    console.log(publicTips);
    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/tips/${id}`,{
                    method:'DELETE',
                  
                }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remainingUsers = publicTips.filter(user=>user._id !== id);
                    setPublicTips(remainingUsers)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                })
            }
        });
    }
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
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>

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
                                <td>
                                    {user.Title}
                                </td>
                                <td>{user.Category}</td>
                                <td>{user.condition}</td>
                                <th className='space-x-3'>
                                    <button className="btn  btn-xs">View Details</button>
                                    <button className="btn  btn-xs">Edit</button>
                                    <button onClick={() => handleDelete(user._id)} className="btn  btn-xs">Delete</button>
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
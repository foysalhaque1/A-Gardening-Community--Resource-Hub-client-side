import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const MyTip = () => {
    const initialData = useLoaderData();
    const [data,setData] = useState(initialData)
    console.log(data)
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
                .then(deleteData => {
                    if(deleteData.deletedCount){

                        console.log(deleteData)
                        
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remainingUsers = data.filter(user=>user._id !== id);
                        setData(remainingUsers)
                    }
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
                            data.map((user, index) => <tr>
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
                                    <Link to={`/tipsDetails/${user._id}`} ><button className="btn  btn-xs">View Details</button></Link>
                                    <Link to={`/update/${user._id}`} ><button className="btn  btn-xs">Edit</button></Link>
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

export default MyTip;
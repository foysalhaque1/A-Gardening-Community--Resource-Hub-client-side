import React   from 'react';
import { Link, useLoaderData } from 'react-router';

import Swal from 'sweetalert2';

const BrowseTip = () => {
    const data = useLoaderData();
   
    console.log(data)
    const publicTips = data.filter(pubData => pubData.condition == "Public")
    // const [publicTips,setPublicTips] = useState(initialPublicTips)
    console.log(publicTips);
    
  
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
                            <div className='flex gap-2.5 mt-2.5'>
                                <div>
                                    <input type="radio" name="topping" id="Easy" />
                                    <label htmlFor='Easy'>Easy</label>
                                </div>
                                <div>
                                    <input type="radio" name="topping" id="medim" />
                                    <label htmlFor='Easy'>Medium</label>
                                </div>
                                <div>
                                    <input type="radio" name="topping" id="difficult" />
                                    <label htmlFor='Easy'>Difficult</label>
                                </div>
                            </div>

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
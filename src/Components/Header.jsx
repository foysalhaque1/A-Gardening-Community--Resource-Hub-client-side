import React, { use } from 'react';
import { Link } from 'react-router';
// import userImg from '../assets/download.png'
import { AuthContext } from '../Authentication/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import DarkToggleButton from './DarkToggleButton';


const Header = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        console.log('log out');
        logOut().then(() => {
            toast('You logged out successfully')
        }).catch((error) => {
            const errorMessage = error.message;
            toast(errorMessage)
        });

    }
    return (
        // <div className='text-center'>
        //     <Link to={'/'} className='btn btn-primary mx-2.5' >Home</Link>
        //     <Link to={'/gardener'} className='btn btn-primary mx-2.5' >Explore Gardeners</Link>
        //     <Link to={'/signin'} className='btn btn-primary' >Sign in</Link>
        //     <Link to={'/signup'} className='btn btn-primary mx-2.5' >Sign Up</Link>
        // </div>

        <div>
            <div className="navbar bg-base-300 shadow-sm p-5 mb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm space-y-3 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
                            <li><Link to={'/'} className='btn btn-primary mx-2.5' >Home</Link></li>
                            <li><Link to={'/gardener'} className='btn btn-primary mx-2.5' >Explore Gardeners</Link></li>
                            <li><Link to={'/browsetip'} className='btn btn-primary mx-2.5' >Browse Tip</Link></li>
                            {
                                user ? <li><Link to={'/sharedtip'} className='btn btn-primary mx-2.5' >Shared Tip</Link></li> : ''
                            }
                            {
                                user ? <li><Link to={`/mytip/${user.email}`} className='btn btn-primary mx-2.5' >My Tip</Link></li> : ''
                            }

                            <li>

                                <DarkToggleButton></DarkToggleButton>
                            </li>


                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className='w-32 rounded-full ' src="https://img.freepik.com/free-vector/logo-template-design_1222-85.jpg?uid=R201281551&ga=GA1.1.879106373.1747835804&semt=ais_hybrid&w=740" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex lg:mr-28">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'} className='btn btn-primary mx-2.5' >Home</Link></li>
                        <li><Link to={'/gardener'} className='btn btn-primary mx-2.5' >Explore Gardeners</Link></li>
                        <li><Link to={'/browsetip'} className='btn btn-primary mx-2.5' >Browse Tip</Link></li>
                        {/* <li><Link to={'/grdenevent'} className='btn btn-primary mx-2.5' >Event</Link></li> */}
                        {
                            user ? <li><Link to={'/sharedtip'} className='btn btn-primary mx-2.5' >Share a Garden Tip</Link></li> : ''
                        }
                        {
                            user ? <li><Link to={`/mytip/${user.email}`} className='btn btn-primary mx-2.5' >My Tip</Link></li> : ''
                        }
                        <DarkToggleButton></DarkToggleButton>

                    </ul>
                </div>
                <div className="navbar-end space-x-3 mr-7">
                    {
                        user ?
                            <details className="dropdown">
                                <summary className="btn m-1 relative group">
                                    <img className='w-full p-3.5 py-3 h-fit ' src={user.photoURL} alt="" />
                                    <div className='absolute w-full h-full -bottom-10 opacity-0 group-hover:bottom-0 group-hover:opacity-100 bg-black/20 flex justify-center items-center transition-all duration-300'>
                                    <h2 className='text-white font-bold'>{user.displayName}</h2>

                                    </div>
                                    
                                    </summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li> <button className='btn btn-primary' onClick={handleLogOut} >Logout</button> </li>

                                </ul>
                            </details>
                            : <Link to={'/signin'} className='btn btn-primary' >Sign in</Link>
                    }
                    {
                        user && <p>{user.email}</p>
                    }

                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;









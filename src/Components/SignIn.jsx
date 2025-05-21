import React, { use } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Authentication/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const SignIn = () => {
    const { googleSignIn, signIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
    const handleGoogleSignIn = e => {
        e.preventDefault();
        googleSignIn().then(res => {
            const user = res.user;
            console.log(user);
            toast('Sign in Successfull')
            navigate(`${location.state ? location.state : '/'}`)
        }).then(error => {
            console.log(error)
        })
    }
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signIn(email, password).then(res => {
            const user1 = res.user;
            console.log(user1)
            toast('Sign in Successfull')
            navigate(`${location.state ? location.state : '/'}`)
        }).catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            toast(errorMessage)
        });
    }
    return (
        <div className='flex justify-center min-h-screen items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="p-11">
                    <h1 className="text-4xl font-bold text-center my-5">Signin now</h1>
                    <form onSubmit={handleLogIn}>
                        {/* email */}
                        <label className="label">Email</label>
                        <input required type="email" name='email' className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <input required type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>

                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-primary w-full my-3' ><FaGoogle></FaGoogle>Google sign in</button>
                    <p className='text-center font-semibold my-3.5' >Don't have an account ? <Link className='text-secondary' to={'/signup'} >Register</Link></p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignIn;



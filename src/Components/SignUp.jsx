import React, { use } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Authentication/AuthContext';

const SignUp = () => {
    const {googleSignIn} = use(AuthContext)
    const handleGoogleSignIn = e =>{
        e.preventDefault();
        googleSignIn().then(res=>{
            const user = res.user;
            console.log(user)
        }).then(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <button onClick={handleGoogleSignIn} className='btn btn-primary' ><FaGoogle></FaGoogle>Google sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
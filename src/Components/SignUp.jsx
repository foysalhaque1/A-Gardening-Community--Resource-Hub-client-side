import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Authentication/AuthContext';
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const SignUp = () => {
    const [showPass, setShowPass] = useState(false)
    const { googleSignIn, createUser, setUser, updateUser,user } = use(AuthContext);
    const navigate = useNavigate()
    const handleGoogleSignIn = e => {
        e.preventDefault();
        googleSignIn().then(res => {
            const user1 = res.user;
            console.log(user1);
            // updateUser({ displayName:})
            // setUser(user1)
        }).then(error => {
            console.log(error)
        })
    }
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]).{8,}/;
        if (passwordRegExp.test(password) === false) {
            toast('Must be  8 characters, including atleast a number,a lowercase letter,a uppercase letter,a special character');
            return
        }
        console.log({ name, email, photo, password });
        createUser(email, password).then((res) => {
            const user1 = res.user;
            // console.log(user);
            toast('You register your accoun successfully')
            
            updateUser({ displayName: name, photoURL: photo }).then(() => {

                setUser({ ...user1, displayName: name, photoURL: photo })
            }).catch((error) => {
                console.log(error);
                setUser(user1)
            });
        }).catch(error => {
            // const errorCode = error.code;s
            const errorMessage = error.message;
            toast(errorMessage)
        });
        if(user){
            return navigate('/')
        }else{
            console.log('Create your account correctly')
        }
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="p-11">
                    <h1 className="text-3xl font-bold text-center my-5">Signup Your Account</h1>
                    <form onSubmit={handleRegister} className="">
                        {/* name*/}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                        {/*photo*/}
                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input" placeholder="Photo" />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" required name='email' className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label">Password</label>
                        <div className='relative'>

                            <input required name='password' type={showPass ? 'text' : "password"} className="input" placeholder="Password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be  6 characters, including number, lowercase letter, uppercase letter"
                            />
                            <button onClick={() => { setShowPass(!showPass) }} className='btn btn-xs absolute top-2 right-6' > {
                                showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }</button>
                        </div>

                        <button type='submit'  className="btn btn-neutral mt-4 w-full">Register</button>

                    </form>
                    <button onClick={handleGoogleSignIn} className='btn btn-primary w-full my-3' ><FaGoogle></FaGoogle>Google sign in</button>
                    <p className='text-center font-semibold my-3.5' >Already have an account ? <Link className='text-secondary' to={'/signin'} >Signin</Link></p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;
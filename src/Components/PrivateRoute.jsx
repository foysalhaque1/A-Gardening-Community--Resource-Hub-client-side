import React, { use } from 'react';
import { AuthContext } from '../Authentication/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from './Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
   // console.log(user)
   const location = useLocation();
   console.log(location)
   if(loading){
    return <Loading></Loading>;
   }
    if(user && user?.email){
        return children;
    }else{
        return <Navigate state={location.pathname} to={'/signin'} ></Navigate>
    }
   
};

export default PrivateRoute;
import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='text-center'>
            <Link to={'/signin'} className='btn btn-primary' >Sign in</Link>
            <Link to={'/signup'} className='btn btn-primary mx-2.5' >Sign Up</Link>
        </div>
    );
};

export default Header;
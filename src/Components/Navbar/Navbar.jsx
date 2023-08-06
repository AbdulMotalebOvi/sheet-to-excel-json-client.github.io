import React, { useEffect, useState } from 'react'
import { NavLinks } from './NavLinks.jsx'
import Button from '../Button/Button.jsx'
import { Link } from 'react-router-dom'
import { useUserContext } from '../Context/UserContextProvider.jsx'


export default function Navbar() {
    const { userData, clearUserData } = useUserContext();
    const [userProfileData, setUserProfileData] = useState(null);

    useEffect(() => {
        // Update the local state when userData changes
        if (userData) {
            setUserProfileData(userData);
        }
    }, [userData])
    const handleLogout = () => {
        clearUserData();

    };

    return (
        <header className='max-w-screen-xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        userProfileData ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle border-black border-2 avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={userProfileData?.profilePicture} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <p className='text-black text-medium'>{userProfileData?.email}</p>
                                    </li>
                                    <li><a>Dashboard</a></li>
                                    <li><button className='btn btn-sm' onClick={handleLogout}>Logout</button></li>
                                </ul>
                            </div>
                            : <>
                                <Link to='/signup'><Button title='Register Now' /></Link>
                                <Link to='/Signin'><Button title='Log in  Now' /></Link>
                            </>}
                </div>
            </div>
        </header>

    )
}

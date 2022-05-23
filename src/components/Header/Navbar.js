import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    const menuItems = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            {user && <NavLink to="/dashboard">Dashboard</NavLink>}
        </li>
        <li>
            {user && <NavLink to="/purchase">Purchase</NavLink>}
        </li>
        <li>
            {user ? <button onClick={logout} className='btn btn-ghost'>Logout</button> : <NavLink to="/login">Login</NavLink>}
        </li>
    </>
    return (
        <div class="navbar bg-base-100 w-full md:w-10/12 mx-auto flex justify-between">
            <div class="dropdown lg:hidden">
                <label tabIndex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <div class="navbar-start">
                <div class="navbar-center">
                    <Link to='/' class="btn btn-ghost normal-case text-xl">HardCore</Link>
                </div>
            </div>
            <div class="navbar-end ">
                <div className='hidden lg:flex'>
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};
export default Navbar;
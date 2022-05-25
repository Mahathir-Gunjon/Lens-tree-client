import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';


const Dashboard = () => {

    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div className='w-full lg:w-5/6 mx-auto'>
            <div className="drawer drawer-mobile mt-6">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-white px-6">
                    <h2 className="text-5xl text-secondary mt-3 px-2">Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-accent text-black md:mr-4 rounded-lg">
  
                        <li><NavLink to='profile'>My Profile</NavLink></li>
                        <li><NavLink to='order'>My order</NavLink></li>
                        <li><NavLink to='review'>Add Review</NavLink></li>
                        {admin && <li><NavLink to='users'>All Users</NavLink></li>}
                        {admin && <li><NavLink to='manageorders'>Manage Order</NavLink></li>}
                        {admin && <li><NavLink to='addProduct'>Add Product</NavLink></li>}
                        {admin && <li><NavLink to='manageProducts'>Manage Products</NavLink></li>}
                    </ul>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;
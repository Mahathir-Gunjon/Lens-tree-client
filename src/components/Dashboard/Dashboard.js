import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import useAdmin from '../hooks/useAdmin';


const Dashboard = () => {

    // const [user] = useAuthState(auth)
    // const [admin] = useAdmin(user)

    return (
        <div className='w-full lg:w-5/6 mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-white">
                    <h2 className="text-5xl text-secondary">Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-accent text-black md:mr-4 rounded-lg">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='order'>My order</NavLink></li>
                        <li><NavLink to='review'>Add Review</NavLink></li>
                        {/* <li><NavLink to='history'>My Profile</NavLink></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
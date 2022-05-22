import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <div className="drawer drawer-mobile w-full lg:w-5/6 mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className="text-5xl text-secondary">Purches details</h2>
                    <Outlet>
                    </Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
                        <div class="card card-compact w-52 bg-base-100 shadow-lg mt-16">
                            <figure><img src={user?.photoURL} alt="..." /></figure>
                            <div class="card-body">
                                <h2 class="card-title">{user.displayName}</h2>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
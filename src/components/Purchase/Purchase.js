import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <div className="drawer drawer-mobile w-full lg:w-5/6 mx-auto mt-16">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h2 className="text-5xl text-secondary mb-10">Purches details</h2>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
                        <div class="card card-compact w-52 bg-yellow-500 py-5 shadow-lg mt-20">
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
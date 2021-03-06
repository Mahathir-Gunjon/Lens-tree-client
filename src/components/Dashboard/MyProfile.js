import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    return (
        <div className="flex justify-center items-center mt-20">
            <div className="card w-96 bg-slate-50 p-8 shadow-xl">
                <h1 className="text-3xl font-semibold">My profile</h1>
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL} alt="user" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user.displayName}</h2>
                    <p>{user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
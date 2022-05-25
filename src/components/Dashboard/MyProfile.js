import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    return (
        <div className="flex justify-center items-center mt-20">

            <div class="card w-96 bg-accent p-8 shadow-xl">
                <h1 className="text-3xl font-semibold">My profile</h1>
                <div class="card-body">
                    <h2 class="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
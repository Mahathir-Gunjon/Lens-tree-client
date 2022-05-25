import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useTools from '../../Hooks/useTools';

const Purchase = () => {
    const [user] = useAuthState(auth);

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 0) {
        decrementCounter = () => setCounter(1);
    }

    return (
        <div>
            <div className="w-full lg:w-3/6 mx-auto mt-28">
                <div className="card lg:card-side bg-accent shadow-xl">
                    <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>

                        <div className="flex items-center justify-center">
                            <button onClick={() => decrementCounter()} className="btn btn-primary rounded-none text-3xl font-extrabold">-</button>
                            <input type="number" value={counter} className="input input-bordered rounded-none input-warning w-full max-w-xs" />
                            <button onClick={() => incrementCounter()} className="btn btn-primary rounded-none text-3xl font-extrabold">+</button>
                        </div>

                        <div className="card-actions justify-end">
                            <button className='btn btn-primary shadow'>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useTools from '../../../Hooks/useTools';

const Order = () => {

    const [user] = useAuthState(auth);

    const { toolId } = useParams();

    const [tools, setTools] = useTools()

    const { name, description, Price, minOrderLimit, availableQuantity, picture } = tools;

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 0) {
        decrementCounter = () => setCounter(1);
    }

    // const url = ;

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${toolId}`)
            .then(res => res.json())
            .then(data => setTools(data));
    }, [tools]);

    return (
        <div>
            <div className="w-full lg:w-3/6 mx-auto mt-28">
                <div className="card lg:card-side bg-accent shadow-xl">
                    <figure><img className='w-80 h-80' src={picture} alt='' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div className="card-text">
                            <h3 className='text-xl mb-2'>Price: ${Price}</h3>
                            <h3 className='text-xl mb-2'>Minimum order Quantity: {minOrderLimit}</h3>
                            <h3 className='text-xl mb-2'>Available Quantity: {availableQuantity}</h3>
                            <p className='text-xl'>Description: {description}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={user.displayName} class="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled value={user.email} class="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <div className="flex items-center justify-center">
                            <button onClick={() => decrementCounter()} className="btn btn-primary rounded-none text-3xl font-extrabold">-</button>
                            <input readOnly type="number" value={counter} className="input input-bordered rounded-none input-warning w-full max-w-xs" />
                            <button onClick={() => incrementCounter()} className="btn btn-primary rounded-none text-3xl font-extrabold">+</button>
                        </div>
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;
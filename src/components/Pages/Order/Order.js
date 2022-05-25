import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useTools from '../../../Hooks/useTools';

const Order = () => {

    const [user] = useAuthState(auth);

    const { toolId } = useParams();

    const [tools, setTools] = useTools()

    const { _id, name, description, Price, minOrderLimit, availableQuantity, picture } = tools;

    // const [counter, setCounter] = useState(1);
    // const incrementCounter = () => setCounter(counter + 1);
    // let decrementCounter = () => setCounter(counter - 1);
    // if (counter <= 0) {
    //     decrementCounter = () => setCounter(1);
    // }

    // order form
    const handleOrder = event => {
        event.preventDefault();
        console.log(_id, name);
        const order = {
            orderId: _id,
            orderName: name,
            quantity: event.target.quantity.value,
            buyerName: user.displayName,
            buyerEmail: user.email,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('order placed successfully');
            })
    }

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
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={name} class="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled value={user.displayName} class="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled value={user.email} class="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name="quantity" placeholder="Set quantity" class="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
            {/* <div className="flex items-center justify-center">
                            <button onClick={() => decrementCounter()} className="btn btn-primary rounded-none text-3xl font-extrabold">-</button>
                            <input readOnly type="number" value={counter} className="input input-bordered rounded-none input-warning w-full max-w-xs" />
                            <button onClick={() => incrementCounter()} className="btn btn-primary rounded-none text-3xl font-extrabold">+</button>
                        </div> */}
        </div>
    );
};

export default Order;
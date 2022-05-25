import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [orders, setOrders] = useState([]);

    const recentOrders = [...orders].reverse();

    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?buyerEmail=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                });
        }
    }, [user])

    return (
        <div>
            <div className="flex justify-end bg-accent p-5 rounded-lg my-8 mt-[-55px]">
                <h2 className='text-xl font-semibold'>My Total Orders: {orders.length}</h2>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            {/* <th>Payment</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recentOrders.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.buyerEmail}</td>
                                <td>{a.orderName}</td>
                                <td>{a.quantity}</td>
                                {/* <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}
                                </td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default MyOrder;
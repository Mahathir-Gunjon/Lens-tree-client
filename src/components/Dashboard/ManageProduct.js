import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTools from '../../Hooks/useTools';
import DashboardModal from './DashboardModal';


const ManageProduct = () => {
    const [tools, setTools] = useTools()

    const [deleteitem, setDeleteitem] = useState(null);

    const recentTools = [...tools].reverse();

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if (proceed) {
            const url = `https://afternoon-eyrie-82354.herokuapp.com/tool/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    toast("Item deleted successfully", { type: "success" });
                    const remaining = tools.filter(tools => tools._id !== id);
                    setTools(remaining);
                })
        }
    }


    return (
        <div>
            <div className="flex justify-end bg-accent p-5 rounded-lg my-8 mt-[-55px]">
                <h2 className='text-xl font-semibold'>Total Products: {tools.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tool</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recentTools.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.name}</td>
                                <td>
                                    <img className='w-16 rounded-md' src={a.picture} alt="" />
                                </td>
                                <td>{a.Price}/per</td>
                                <td>{a.availableQuantity}</td>
                                <td className='text-center' style={{ width: '100px' }}>
                                    <button onClick={() => handleDelete(a._id)} className='btn btn-sm btn-info shadow mx-1'>Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <div className='flex justify-end my-8'>
                <Link to="/addProduct">
                    <button className='btn btn-info btn-md'>Add New Item</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageProduct;
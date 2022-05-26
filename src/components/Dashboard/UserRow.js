import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('If you want to make admin, you need to be admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item?');
        if (proceed) {
            const url = `http://localhost:5000/user/${email}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    toast("Item deleted successfully", { type: "success" });
                    const remaining = user.filter(tools => tools._id !== id);
                    user(remaining);
                })
        }
    }

    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-info btn-xs">Make Admin</button> : <button className="btn btn-accent btn-xs px-7"> Admin</button>}</td>
            <td className='text-center' style={{ width: '100px' }}>
                <button onClick={() => handleDelete(email)} className='btn btn-xs btn-info shadow mx-1'>Delete</button>
            </td>
        </tr>
    );
};

export default UserRow;
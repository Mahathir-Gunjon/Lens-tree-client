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
                if(res.status === 403){
                    toast.error('If you want to make admin, you need to be admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-info btn-xs">Make Admin</button> : <button class="btn btn-accent btn-xs px-7"> Admin</button>}</td>
            <td><button class="btn btn-outline btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;
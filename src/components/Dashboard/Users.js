import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Header/Loading';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) return <Loading />;

    return (
        <div>
            <div className="flex justify-end bg-accent p-5 rounded-lg my-8 mt-[-55px]">
                <h2 className='text-xl font-semibold'>Total Users: {users.length}</h2>
            </div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th className='w-[100px]'>User Role</th>
                            <th className='w-[100px]'>Manage User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
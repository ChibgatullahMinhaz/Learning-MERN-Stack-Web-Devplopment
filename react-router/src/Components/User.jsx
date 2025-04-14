import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            {
                users.map(user => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default User;
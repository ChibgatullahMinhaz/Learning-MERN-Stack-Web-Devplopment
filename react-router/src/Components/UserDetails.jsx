import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const { id, name, email, phone, website } = user;
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <p><span>{phone}</span></p>
            <p><span>{website}</span></p>
        </div>
    );
};

export default UserDetails;
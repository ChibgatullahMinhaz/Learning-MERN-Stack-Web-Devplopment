import React from 'react';

const users = ({user}) => {
    console.log(user)
    return (
        <div>
            {user.name}
        </div>
    );
};

export default users;
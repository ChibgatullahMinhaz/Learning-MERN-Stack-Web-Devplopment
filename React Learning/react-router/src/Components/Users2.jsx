import React, { use } from "react";
import { Link, useParams } from "react-router";

export const Users2 = ({ user2Promies }) => {
  const resolve = use(user2Promies);
  console.log(resolve);
  return (
    <div>
      {resolve.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <button>
            <Link to={`/users2/${user.id}`}>Show User</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

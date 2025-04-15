import React from "react";
import { Link, useLoaderData } from "react-router";
import UserCart from "./UserCart/UserCart";

const User = () => {
  const users = useLoaderData();
  
  return (
    <div>
      {users.map((user) => (
        <UserCart key={user.id} user = {user}></UserCart>
      ))}
    </div>
  );
};

export default User;

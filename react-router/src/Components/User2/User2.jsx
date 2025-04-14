import React, { use } from "react";

const User2 = ({ loadUser }) => {
  const users = use(loadUser);
  const {  username, name } = users;
  const cartStyle = {
    border: "1px solid red",
    margin: "10px",
    padding: "10px",
  }
  
  return <div style={cartStyle}>
    <p>{username}</p>
    <p>{name}</p>
  </div>;
};

export default User2;

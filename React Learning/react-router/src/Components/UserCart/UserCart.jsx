import React, { useState, Suspense } from "react";
import { Link } from "react-router";
import User2 from "../User2/User2";

const UserCart = ({ user }) => {
  const { id, website, phone, email, username, name } = user;
  const [showinfo, setShowinfo] = useState(false);
  const loadUser = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

  const handleShowInfo = () => {
    setShowinfo(!showinfo);
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <Link to={`/users2/${user.id}`}>
        <button>Show user</button>
      </Link>
      <button onClick={handleShowInfo}>
        {showinfo ? "Hide" : "Show"} info
      </button>
      {showinfo && (
        <Suspense fallback={<span>Loading......</span>}>
          <User2 loadUser={loadUser}></User2>
        </Suspense>
      )}
    </div>
  );
};

export default UserCart;

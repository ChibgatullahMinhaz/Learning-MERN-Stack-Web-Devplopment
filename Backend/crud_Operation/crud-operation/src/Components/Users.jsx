import React, { use, useState } from "react";

const Users = ({ usePromies }) => {
  const data = use(usePromies);
  const [users, setUsers] = useState(data || []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const newUser = { name, email };
  
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          newUser._id = data.insertedId;
          setUsers([...users, newUser])
          alert("User added successfully");
          console.log("User added successfully:", data);
          event.target.reset();
        } else if (!data.success) {
          alert("User already exists");
          return;
        }
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleDelete = id => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount) {
            const remaining =users.filter(user => user._id !== id);
            setUsers(remaining);
            
        }
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2>Users List : {users.length}</h2>
      <div>
        { users.map((user) => (
          <div key={user._id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={()=>handleDelete(user._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

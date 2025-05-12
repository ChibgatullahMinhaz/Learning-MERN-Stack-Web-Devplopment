import { use, useEffect, useState } from "react";
import "./App.css";
import Users from "./Components/users";

const promies = fetch("http://localhost:3000/users").then((res) => res.json());
function App() {
  const initialLoadingUsers = use(promies);
  const [initialUsers, setInitialUsers] = useState(initialLoadingUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);

    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setInitialUsers([...initialUsers, data]);
      });
    e.target.reset();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter your name" />
          <input type="email" name="email" placeholder="Enter your email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button type="submit">Submit</button>
        </form>
        {initialUsers.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.password}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

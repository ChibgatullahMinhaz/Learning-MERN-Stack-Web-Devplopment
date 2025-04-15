import React, { useState } from "react";

const Controled = () => {
  const [password, setPassword] = useState("");
  const [error , setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else {
      setError("");
      // Submit the form or perform any other action
      console.log("Form submitted with password:", password);
    }
  }

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    if (password.length < 6) {
        setError('Password must be at least 6 characters long');
    }else{
        setError('');
    }
  };
  return (
    <div>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input
          type="password"
          onChange={handlePasswordChange}
          defaultValue={password}
          placeholder="Password"
        />
        <p><small>{error}</small></p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Controled;

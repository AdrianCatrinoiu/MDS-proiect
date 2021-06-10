import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Register.css";
async function registerUser(credentials) {
  return fetch("http://localhost:3001/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export default function Register({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await registerUser({
      username,
      password,
      email,
    });
    console.log(token);
    setToken(token);
  };
  return (
    <div className="register-wrapper">
      <h1>Please Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>E-mail</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
Register.propTypes = {
  setToken: PropTypes.func.isRequired,
};

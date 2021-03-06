import React, { useState } from "react";
import axios from "axios";


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [user, setUser] = useState({
      username: "Lambda School",
      password: "i<3Lambd4"
    });


  const handleChange = (event) => {

    setUser({...user, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    axios.post("http://localhost:5000/api/login", user)
      .then(reponse => {

        console.log("Successfully logged in:", reponse.data.payload);

        localStorage.setItem("token", reponse.data.payload);
        props.history.push("/bubbles");

      })
      .catch(error => {

        console.log("Could not log in:", error);
      })

  }

  return (
   
    <div className="loginForm">
      <form name="login">
        <div className="loginInputContainer">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} />
        </div>
        <div className="loginInputContainer">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </div>
        <button onClick={handleSubmit}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
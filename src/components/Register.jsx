import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Register = () => {
  const { loggedInUser, SetLoggedInUser } = useContext(UserContext);
  return (
    <div className="login-container register">
      <h1>Sign in</h1>
      <form className="registerContainer" action="">
        <input type="text" placeholder="Please enter your username" />
        <input type="text" placeholder="Please enter your name" />
        <input type="url" placeholder="Please add your user image here" />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;

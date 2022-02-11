import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Register = () => {
  const { loggedInUser, SetLoggedInUser } = useContext(UserContext);
  return (
    <div className="login-container">
      <h1>Sign in</h1>
      <form className="registerContainer" action="">
        <input type="text" />
        <input type="text" />
        <input type="url" />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;

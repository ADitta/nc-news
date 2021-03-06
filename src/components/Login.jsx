import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { getUser } from "../utils/utils";

const Login = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const loginHandler = (event) => {
    event.preventDefault();
    getUser(event.target.user.value).then((res) => {
      if (res) {
        setLoggedInUser(res);
        localStorage.setItem("loggedUser", JSON.stringify(res));
      } else {
        event.target.username.value = "";
      }
    });
  };
  return (
    <div className="login-container">
      <h1>Sign in</h1>

      <form onSubmit={loginHandler}>
        <label htmlFor="">
          <input
            placeholder="Enter username"
            value="tickle122"
            type="text"
            id="user"
            required
          />
        </label>
        <button id="login">Login</button>
      </form>
      <Link to="/register"> Register now</Link>
    </div>
  );
};

export default Login;

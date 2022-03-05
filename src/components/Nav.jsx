import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  let navigate = useNavigate();
  const changePath = (path) => {
    navigate(path);
  };
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const logoutHandler = () => {
    localStorage.removeItem("loggedUser");
    setLoggedInUser({});
    changePath("/");
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link id="home" to="/">
          Home
        </Link>
        <Link id="log-out" onClick={logoutHandler} to="/">
          Log Out
        </Link>
      </div>
      <div className="user-link-wrapper">
        <Link to="/user" className="user-link">
          <img src={loggedInUser.avatar_url} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

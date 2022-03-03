import React from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="user-profile-container">
      <div className="info">
        <h1>Name: {loggedInUser.name}</h1>
        <h1>UserName: {loggedInUser.username}</h1>
      </div>
      <div className="user-profile-img">
        <img src={loggedInUser.avatar_url} alt="user profile" />
      </div>
    </div>
  );
};

export default User;

import React from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1>Name: {loggedInUser.name}</h1>
      <h1>UserName: {loggedInUser.username}</h1>
      <img src={loggedInUser.avatar_url} alt="user profile" />
    </div>
  );
};

export default User;

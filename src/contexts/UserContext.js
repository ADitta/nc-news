import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [checkIfLogged, setCheckIfLogged] = useState(true);

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  if (checkIfLogged && loggedUser) {
    setCheckIfLogged(false);
    setLoggedInUser(loggedUser);
  }
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

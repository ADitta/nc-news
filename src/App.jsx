import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/app.scss";
import Nav from "./components/Nav";
import User from "./components/User";
import Register from "./components/Register";
import Login from "./components/Login";
import Articles from "./components/Articles";
import ArticleCard from "./components/ArticleCard";
import { UserContext, UserProvider } from "./contexts/UserContext";
import { useContext } from "react";

function App() {
  const { loggedInUser, SetLoggedInUser } = useContext(UserContext);

  const loginHandler = () => {
    return Object.keys(loggedInUser).length ? (
      <>
        <Nav />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ArticleCard />} />
        </Routes>
      </>
    ) : (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1 className="flex">NOT FOUND</h1>} />
      </Routes>
    );
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Nc News </h1>
        </header>
        {loginHandler()}
      </div>
    </BrowserRouter>
  );
}

export default App;

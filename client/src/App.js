import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/signup" exact>
          <Signup />
        </Route>

        <Route>
          <Error404 />
        </Route>
      </Switch>
    </>
  );
};

export default App;

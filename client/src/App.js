import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AddRecipe from "./pages/AddRecipe";
import View from "./pages/View";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        {/* <Route exact path="/favs" component={Home} /> */}
        <Route exact path="/new-recipe" component={AddRecipe} />
        <Route exact path="/view" component={View} />
      </Switch>
    </Router>
  );
}

export default App;

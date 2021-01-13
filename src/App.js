import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./Components/Header/Header";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/SignIn" component={SignIn} />
      </Switch>
    </>
  );
}

export default App;

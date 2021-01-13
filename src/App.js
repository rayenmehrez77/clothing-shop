import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import ShopPage from "./Components/ShopPage/ShopPage";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;

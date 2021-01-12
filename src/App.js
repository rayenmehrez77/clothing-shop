import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import ShopPage from "./Components/Shop/Shop";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;

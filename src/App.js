import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";

const HatPage = () => {
  return <h1>Hat page</h1>;
};

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={HatPage} />
      </Switch>
    </>
  );
}

export default App;

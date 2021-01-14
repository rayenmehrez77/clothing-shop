import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./Components/Header/Header";
import { auth } from "./firebase/firebase.utils";
import SignInSignUp from "./pages/SignIn-SignUp/SignIn-SignUp";
import Footer from "./Components/Footer/Footer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  // Unsubcribe from the current account
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/SignIn" component={SignInSignUp} />
        </Switch>
      </>
    );
  }
}
export default App;

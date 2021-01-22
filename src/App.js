import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import Shop from "./pages/Shop/Shop";
import Header from "./Components/Header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import SignInSignUp from "./pages/SignIn-SignUp/SignIn-SignUp";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  // Unsubcribe from the current account
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Homepage />} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/SignIn"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

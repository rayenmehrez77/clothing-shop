import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" title="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="sign-out" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signIn" className="sign-in">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;

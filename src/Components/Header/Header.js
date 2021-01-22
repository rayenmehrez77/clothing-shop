import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/online-shopping.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CardIcon from "../CardIcon/CardIcon";
import CardDropdown from "../CardDropdown/CardDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" title="logo" />
        <span className="title">CRWN CLOTHING</span>
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
        <CardIcon />
        {currentUser ? (
          <img
            className="header__imgProfile"
            src={currentUser.photoURL}
            alt="profile picture"
          />
        ) : null}
      </div>
      {hidden ? null : <CardDropdown />}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

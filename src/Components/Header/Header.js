import React from "react";
import { ReactComponent as Logo } from "../../assets/online-shopping.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CardIcon from "../CardIcon/CardIcon";
import CardDropdown from "../CardDropdown/CardDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  SignUpDiv,
  SignInDiv,
} from "./Header.styles";

function Header({ currentUser, hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" title="logo" />
        <span className="title">CRWN CLOTHING</span>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <SignUpDiv onClick={() => auth.signOut()}>SIGN OUT</SignUpDiv>
        ) : (
          <SignInDiv to="/signIn">SIGN IN</SignInDiv>
        )}
        <CardIcon />
      </OptionsContainer>
      {hidden ? null : <CardDropdown />}
    </HeaderContainer>
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

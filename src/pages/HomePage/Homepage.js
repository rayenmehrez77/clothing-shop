import React from "react";
import { connect } from "react-redux";
import Directory from "../../Components/Directory/Directory";
import { HomePageContainer, UsernameHeading } from "./HomPage.styles";

const Homepage = ({ currentUser }) => {
  return (
    <HomePageContainer>
      {currentUser ? (
        <UsernameHeading>
          Welcome back, {currentUser.displayName.toUpperCase().split(" ")[0]}
        </UsernameHeading>
      ) : null}
      <Directory />
    </HomePageContainer>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(Homepage);

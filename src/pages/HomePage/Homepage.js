import React from "react";
import { connect } from "react-redux";
import Directory from "../../Components/Directory/Directory";
import "./HomePage.scss";

const Homepage = ({ currentUser }) => {
  return (
    <div className="homepage">
      {currentUser ? (
        <h2 className="homepage__username">
          Welcome back, {currentUser.displayName.toUpperCase().split(" ")[0]}
        </h2>
      ) : null}
      <Directory />
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(Homepage);

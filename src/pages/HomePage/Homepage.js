import React from "react";
import Directory from "../../Components/Directory/Directory";
import "./HomePage.scss";

const Homepage = ({ currentUser }) => {
  return (
    <div className="homepage">
      {currentUser ? (
        <h2 className="homepage__username">
          Welcome back, {currentUser.displayName.split(" ")[0]}
        </h2>
      ) : null}
      <Directory />
    </div>
  );
};

export default Homepage;

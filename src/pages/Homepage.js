import React from "react";
import Directory from "../Components/Directory/Directory";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;

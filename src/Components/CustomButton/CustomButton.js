import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign" : ""} custom-button `}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;

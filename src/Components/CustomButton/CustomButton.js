import React from "react";
import { CustomButtonStyles } from "./CustomButton.Styles";

function CustomButton({ children, ...otherProps }) {
  return <CustomButtonStyles {...otherProps}>{children}</CustomButtonStyles>;
}

export default CustomButton;

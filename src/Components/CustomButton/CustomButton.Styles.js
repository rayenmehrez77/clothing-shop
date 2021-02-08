import styled, { css } from "styled-components";

const GoogleSignInStyles = css`
  background-color: rgb(0, 99, 212);
  color: #fff;
  border: none;
  outline: none;
  margin-left: 5px;
  &:hover {
    background-color: rgb(0, 76, 163);
  }
`;

const InvertedButtonStyles = styled.button`
  background-color: #beab7e;
  color: black;

  &:hover {
    background-color: black;
    color: #beab7e;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles;
  }
  return props.inverted ? InvertedButtonStyles : "";
};

export const CustomButtonStyles = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 12px;
  background-color: #fffffe;
  border: 1px solid rgb(22, 22, 22);
  color: #000;
  font-weight: 800;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #beab7e;
    color: black;
  }

  ${getButtonStyles}
`;

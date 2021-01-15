import React from "react";
import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SingUp/SingUp";
import "./SignIn-SignUp.scss";

function SignInSignUp() {
  return (
    <div className="signIn-signUp">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInSignUp;

import React, { Component } from "react";
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { ReactComponent as GoogleLogo } from "../../assets/search.svg";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="signIn">
        <h2>Sign In</h2>
        <span>I already have an account </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="Submit" name="submit">
              Sign In
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

{
  /* <GoogleLogo className="google-logo" /> Sign In with Google */
}

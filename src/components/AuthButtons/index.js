import Cookies from "js-cookie";
import { withRouter, Redirect } from "react-router-dom";

import { Component } from "react";

import LogInForm from "../LogInForm";
import SignInForm from "../SignInForm";

import "./index.css";

class AuthButtons extends Component {
  state = { showSignIn: false };

  preventChanges = (event) => {
    event.preventDefault();
  };

  onClickSignIn = () => {
    this.setState({ showSignIn: true });
  };

  onClickLogIn = () => {
    this.setState({ showSignIn: false });
  };

  render() {
    const { showSignIn } = this.state;
    const activeSignInClass = showSignIn ? "active-btn" : "";
    const activeLogInClass = showSignIn === false ? "active-btn" : "";

    const jwtToken = Cookies.get("jwt_token");

    return jwtToken !== undefined ? (
      <Redirect to="/" />
    ) : (
      <div className="auth-buttons-container">
        <div className="top-container">
          <button
            className={`${activeSignInClass} auth-button`}
            onClick={this.onClickSignIn}
            type="button"
          >
            SignIn
          </button>
          <button
            className={`${activeLogInClass} auth-button`}
            onClick={this.onClickLogIn}
            type="button"
          >
            LogIn
          </button>
        </div>

        {showSignIn ? (
          <SignInForm preventChanges={this.preventChanges} />
        ) : (
          <LogInForm preventChanges={this.preventChanges} />
        )}
      </div>
    );
  }
}

export default withRouter(AuthButtons);

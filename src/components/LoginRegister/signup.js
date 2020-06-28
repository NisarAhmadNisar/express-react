import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthenticationConsumer } from "./autheticationapi";
import ProfilePage from "./ProfilePage";
export default class SignUp extends Component {
  userProfileRedirect = () => {
    return this.props.history.push("/userprofile");
  };
  render() {
    return (
      <AuthenticationConsumer>
        {value => {
          const { email, password, name } = value;
          const { handleSignUpChange, handleSignUpSubmit } = value;
          if (value.isSignedUp) {
            return <div>{this.userProfileRedirect()}</div>;
          } else if (!value.isSignedUp) {
            return (
              <div className=" container">
                <div className="row">
                  <div className="col-10 mx-auto">
                    <h1 className="text-center text-primary text-capitalize">
                      SignUp
                    </h1>
                    <form onSubmit={handleSignUpSubmit}>
                      <div className="form-group">
                        <label htmlFor="name">UserName:</label>
                        <input
                          className="form-control"
                          type="name"
                          name="name"
                          id="name"
                          value={name}
                          onChange={handleSignUpChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={handleSignUpChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={handleSignUpChange}
                        />
                      </div>
                      {/* <Link to="#"> */}
                      <input
                        type="submit"
                        value="submit"
                        className="btn btn-primary mt-2"
                      />
                      {/* </Link> */}
                    </form>

                    <Link to="/login">
                      <h4
                        style={{ cursor: "pointer" }}
                        className="text-primary mt-4"
                      >
                        Want to Login instead?
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </AuthenticationConsumer>
    );
  }
}

import React, { Component } from "react";
import { AuthenticationConsumer } from "./autheticationapi";
import { handleChange } from "../../utils/inputs";

export default class Test extends Component {
  render() {
    // const { name } = this.state;
    return (
      <AuthenticationConsumer>
        {value => {
          if (value.isLogged) {
            return (
              <div>
                <h1>You are logged in </h1>>
              </div>
            );
          }
          if (value.isSignedUp && value.isLogged) {
            return (
              <div>
                <h1>you are signed up now</h1>
              </div>
            );
          }
          if (value.isSignedUp) {
            return (
              <div>
                <h1>YOu are only signedin</h1>
              </div>
            );
          } else {
            return (
              <div>
                <h1>Please log in first</h1>
                <form onSubmit={value.handleSubmit}>
                  <input
                    type="text"
                    name="email"
                    value={value.email}
                    onChange={value.handleChange}
                  />
                  <input
                    type="text"
                    name="password"
                    value={value.password}
                    onChange={value.handleChange}
                  />
                  <input type="submit" value="submit" />
                </form>
              </div>
            );
          }
        }}
      </AuthenticationConsumer>
    );
  }
}

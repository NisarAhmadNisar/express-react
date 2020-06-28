import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthenticationConsumer } from "./autheticationapi";
import { ProductConsumer } from "../../contextapi";

export default class Login extends Component {
  //Redirects
  userShopRedirect = () => {
    return this.props.history.push("/shop");
  };
  userShippingAddressRedirect = () => {
    return this.props.history.push("/shippingaddress");
  };
  render() {
    return (
      <AuthenticationConsumer>
        {authValue => {
          const { email, password, isLogged } = authValue;
          const { handleLoginChange, handleLoginSubmit } = authValue;
          return (
            <ProductConsumer>
              {productValue => {
                if (isLogged && productValue.cart.length <= 0) {
                  return <div>{this.userShopRedirect()}</div>;
                } else if (!isLogged) {
                  return (
                    <div className=" container">
                      <div className="row">
                        <div className="col-10 mx-auto">
                          <h1 className="text-center text-primary text-capitalize">
                            Login
                          </h1>
                          <form onSubmit={handleLoginSubmit}>
                            <div className="form-group">
                              <label htmlFor="email">
                                <strong>Email:</strong>
                              </label>
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={handleLoginChange}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="password">
                                <strong> Password: </strong>
                              </label>
                              <input
                                className="form-control"
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleLoginChange}
                              />
                            </div>
                            {/* <Link to="#"> */}
                            <input
                              type="submit"
                              value="submit"
                              className="btn btn-primary"
                            />
                            {/* </Link> */}
                          </form>
                          <Link to="/signup">
                            <h4
                              style={{ cursor: "pointer" }}
                              className="text-primary mt-4"
                            >
                              Want to Sign up instead?
                            </h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                } else if (productValue.cart.length > 0 && authValue.isLogged) {
                  return <div>{this.userShippingAddressRedirect()}</div>;
                }
              }}
            </ProductConsumer>
          );
        }}
      </AuthenticationConsumer>
    );
  }
}

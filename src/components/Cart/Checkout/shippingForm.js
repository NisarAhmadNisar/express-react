import React, { Component } from "react";
import { AuthenticationConsumer } from "../../LoginRegister/autheticationapi";
import { ProductConsumer } from "../../../contextapi";

export default class ShippingForm extends Component {
  //Redirects
  LoginRedirect = () => {
    return this.props.history.push("/login");
  };

  userCheckoutRedirect = () => {
    return this.props.history.push("/checkout");
  };

  render() {
    return (
      <AuthenticationConsumer>
        {authValue => {
          const { email, name } = authValue;
          const { handleShippingChange, handleShippingSubmit } = authValue;
          return (
            <ProductConsumer>
              {productValue => {
                if (!authValue.isLogged) {
                  return <div>{this.LoginRedirect()}</div>;
                } else if (
                  authValue.isLogged &&
                  productValue.cart.length > 0 &&
                  authValue.proceedToCheckout === false
                ) {
                  return (
                    <div className="container">
                      <h1 className="text-center text-primary text-capitalize">
                        Shipping Address
                      </h1>
                      <form onSubmit={handleShippingSubmit}>
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
                            onChange={handleShippingChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">
                            <strong> name: </strong>
                          </label>
                          <input
                            className="form-control"
                            type="name"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleShippingChange}
                          />
                        </div>
                        <input
                          type="submit"
                          value="submit"
                          className="btn btn-primary"
                        />
                        {/* <Link to="/checkout">
                          <button>Proceed to Checkout</button>
                        </Link> */}
                      </form>
                    </div>
                  );
                } else if (
                  authValue.isLogged &&
                  productValue.cart.length > 0 &&
                  authValue.proceedToCheckout
                ) {
                  return <div>{this.userCheckoutRedirect()}</div>;
                }
              }}
            </ProductConsumer>
          );
        }}
      </AuthenticationConsumer>
    );
  }
}

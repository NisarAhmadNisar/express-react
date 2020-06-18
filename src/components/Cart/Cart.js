import React, { Component } from "react";
import Title from "../ReusableComponents/Title/Title";
import CartColumn from "../ReusableComponents/CartColumn";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../contextapi";
import CartList from "./CartList";
import CartTotals from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart"></Title>
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

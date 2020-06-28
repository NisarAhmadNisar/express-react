import React, { Component } from "react";
import Product from "../Product/Product";
import Title from "../ReusableComponents/Title/Title";
import { ProductConsumer } from "../../contextapi";

export default class ProductList extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          let filtered = value.products.filter(product => {
            return (
              product.title
                .toLowerCase()
                .indexOf(value.search.toLowerCase()) !== -1
            );
          });

          return (
            <React.Fragment>
              <div className="py-5">
                <div className="container">
                  <Title name="our" title="products" />

                  <label htmlFor="search">
                    <strong> Search: </strong>
                  </label>
                  <input
                    id="search"
                    className="form-control"
                    type="text"
                    value={value.search}
                    onChange={value.updateSearch}
                  />
                  <div className="row">
                    {filtered.map(product => {
                      return (
                        <Product
                          key={product.id}
                          product={product}
                          img={product.img}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

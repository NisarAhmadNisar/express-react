import React, { Component } from "react";

import ProductWrapper from "../ReusableComponents/ImageWrapper/ImageWrapper";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../contextapi";
import PropTypes from "prop-types";
// import { storeProducts } from "../../data";
// import Home from "../Details/tempDetails";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to={`/details/${id}`}>
                  {this.props.product.img.map(product => {
                    return (
                      <img
                        key={product.id}
                        style={{ width: "15rem", height: "15rem" }}
                        className="card-img-top"
                        src={process.env.REACT_APP_BACKEND_URL + product.url}
                        alt="Productimage"
                      />
                    );
                  })}
                </Link>
                <button
                  className="card-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {" "}
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus"></i>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h3 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h3>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

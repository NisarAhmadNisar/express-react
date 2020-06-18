import React, { Component } from "react";
import { ProductConsumer } from "../../contextapi";
import { Link } from "react-router-dom";
import ButtonContainer from "../ReusableComponents/Buttons/button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            img,
            price,
            inCart,
            company,
            info
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title  */}
              <div className="row">
                <div className="col-10  text-center text-slanted mx-auto  my-5">
                  <h1 className="text-blue">{title}</h1>
                </div>
              </div>
              {/* end title  */}
              {/* product info  */}
              <div className="row">
                <div className="col-10 col-md-6 mx-auto my-3">
                  <img src={img} alt="product Image" className="img-fluid" />
                </div>
                {/* product text */}
                <div className="col-10 col-md-6  mx-auto my-3">
                  <h1 className="text-capitalize">model: {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong className="text-capitalize">
                      price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mb-0 mt-3">
                    some info about the product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons  */}
                  <div>
                    <Link to="/shop">
                      <ButtonContainer>back to product</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

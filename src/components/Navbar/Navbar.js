import React, { Component } from "react";
import { Link } from "react-router-dom";
import ButtonContainer from "../ReusableComponents/Buttons/button";
import NavWrapper from "../ReusableComponents/NavWrapper/NavWrapper";
import diamond from "../../diamond.svg";
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/shop">
          <span className="navbar-brand">
            <img src={diamond} alt="diamond" />
          </span>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-3">
            <Link to="/about" className="nav-link ">
              <span>About Us</span>
            </Link>
          </li>

          <li className="nav-item ml-3">
            <Link to="/" className="nav-link ">
              <span>Home</span>
            </Link>
          </li>

          <li className="nav-item ml-3">
            <Link to="/shop" className="nav-link ">
              <span>Shop</span>
            </Link>
          </li>
          <li className="nav-item ml-3">
            <Link to="/" className="nav-link ">
              <span>Blog</span>
            </Link>
          </li>
          <li className="nav-item ml-3">
            <Link to="/contact" className="nav-link ">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

import React, { Component } from "react";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 m-auto text-center text-uppercase text-title px-5">
            <h1 className="display-3 text-title mt-3">404</h1>
            <h1 className="text-title">error</h1>
            <h2 className="text-title">page not found</h2>
            <h4 className="text-title">
              the requested URL{" "}
              <span className=" text-danger">
                {this.props.location.pathname}
              </span>{" "}
              was not found{" "}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import { ProductConsumer } from "../../contextapi";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center">
          <h1 className="text-title">your cart is currently empty</h1>
        </div>
      </div>
    </div>
  );
}

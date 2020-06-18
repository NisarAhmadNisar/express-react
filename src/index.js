import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./utils/apolloClient";
import "./index.css";
import ProductProvider from "./contextapi";

ReactDOM.render(
  <ProductProvider>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </ProductProvider>,
  document.getElementById("root")
);

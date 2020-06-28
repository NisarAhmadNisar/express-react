import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./utils/apolloClient";
import "./index.css";
import ProductProvider from "./contextapi";
import { AuthenticationProvider } from "./components/LoginRegister/autheticationapi";

ReactDOM.render(
  <AuthenticationProvider>
    <ProductProvider>
      <Router>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Router>
    </ProductProvider>
  </AuthenticationProvider>,
  document.getElementById("root")
);

import React from "react";
import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import ProductList from "../../components/ProductList/ProductList";
import Details from "../../components/Details/Details";
import Navbar from "../../components/Navbar/Navbar";
import Cart from "../../components/Cart";
import Modal from "../../components/Modal/Modal";

import PageNotFound from "../../components/Default/PageNotFound";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/articles" component={Articles} exact />
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
        <Route path="/details" component={Details} exact></Route>
        <Route path="/shop" component={ProductList} exact></Route>
        <Route path="/cart" component={Cart} exact></Route>
        <Route component={PageNotFound} exact></Route>
      </Switch>
      <Modal />
    </div>
  );
}

export default App;

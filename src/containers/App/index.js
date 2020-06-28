import React from "react";
// import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";
import ProductList from "../../components/ProductList/ProductList";
import Navbar from "../../components/Navbar/Navbar";
import Cart from "../../components/Cart";
import Modal from "../../components/Modal/Modal";
import PageNotFound from "../../components/Default/PageNotFound";
import { Switch, Route } from "react-router-dom";
import TempDetails from "../../components/Details/tempDetails";
import ProfilePage from "../../components/LoginRegister/ProfilePage";
import SignUp from "../../components/LoginRegister/signup";
import Login from "../../components/LoginRegister/login";
import Test from "../../components/LoginRegister/test";
import { AuthenticationConsumer } from "../../components/LoginRegister/autheticationapi";
import NavbarLogged from "../../components/Navbar/NavbarLogged";
import Checkout from "../../components/LoginRegister/Checkout";
import ShippingForm from "../../components/Cart/Checkout/shippingForm";

function App() {
  return (
    <div className="App">
      <AuthenticationConsumer>
        {value => {
          if (value.isLogged || value.isSignedUp) {
            return <NavbarLogged />;
          } else if (!value.isLogged || !value.isSignedUp) {
            return <Navbar />;
          }
        }}
      </AuthenticationConsumer>
      <Switch>
        <Route path="/" component={Articles} exact />
        {/* <Route path="/about" component={About} exact /> */}
        <Route path="/articles" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
        <Route path="/details/:id" component={TempDetails} exact />
        <Route path="/userprofile" component={ProfilePage} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/test" component={Test} exact />

        <Route path="/shop" component={ProductList} exact></Route>
        <Route path="/cart" component={Cart} exact></Route>
        <Route path="/checkout" component={Checkout} exact></Route>
        <Route path="/shippingaddress" component={ShippingForm} exact></Route>

        <Route component={PageNotFound} exact></Route>
      </Switch>
      <Modal />
    </div>
  );
}

export default App;

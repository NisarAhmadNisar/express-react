import React, { createContext, Component } from "react";
import axios from "axios";
const AuthenticationContext = createContext();

export default class AuthenticationProvider extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    bio: "",
    oneLiner: "",
    country: "",
    state: "",
    phoneNumber: "",
    city: "",
    zipcode: "",
    address: "",
    landmark: "",
    user: null,
    proceedToCheckout: false,
    isLogged: false,
    isSignedUp: false
  };

  async componentDidMount() {
    console.log("componentdidmounted");
    const userRes = await axios({
      method: "GET",
      url: "/users/me"
    });
    console.log("users/me authentication.js", userRes);
    if (userRes.data) {
      this.setState({ user: { user: userRes.data }, isLogged: true });
    }

    // if (localStorage.getItem("user")) {
    //   const user = JSON.parse(localStorage.getItem("user"));
    //   this.setState({ user });
    // }
  }

  // logout func

  logout = async () => {
    await axios({
      method: "GET",
      url: "/users/logout"
    });
    this.setState({ user: null, isLogged: false, isSignedUp: false });

    // localStorage.removeItem("user");
    // this.setState({ user: null });
  };

  // Handlechange functions
  handleLoginChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("HandleLoginchange /login ", e.target.value);
  };

  handleSignUpChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("HandleSignupchange /signup ", e.target.value);
  };

  // handleSubmit functions
  handleLoginSubmit = async e => {
    e.preventDefault();
    console.log("handleloginsubmit  called");

    try {
      const { email, password } = this.state;
      const data = {
        password,
        username: email,
        identifier: email
      };
      let res = await axios({
        method: "post",
        url: "/api/auth/local",
        data: data
      });

      if (res.data) {
        this.setState({
          user: res.data,
          isLogged: true
        });
      }
      return console.log(res.data);
    } catch (error) {
      console.log(error.response); // this is the main part. Use the response property from the error object

      return error.response;
    }
  };

  handleSignUpSubmit = async e => {
    e.preventDefault();

    console.log("signupsubmit called");

    // //   sign up and login user with strapi

    try {
      const { email, password, name } = this.state;
      const data = {
        email,
        password,
        username: name
      };
      let res = await axios({
        method: "post",
        url: "/api/auth/local/register",
        data: data
      });

      if (res.data) {
        this.setState({ user: res.data, isLogged: true, isSignedUp: true });
      }
      return console.log(res.data);
    } catch (error) {
      console.log(error.response); // this is the main part. Use the response property from the error object

      return error.response;
    }
  };

  //Profile Submit
  handleProfileUpdateChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("handleProfileUpdateChange /userprofile ", e.target.value);
  };

  handleProfileUpdateSubmit = async e => {
    e.preventDefault();

    const { bio, oneLiner } = this.state;

    const data = {
      bio,
      fav_oneliner: oneLiner
    };

    const userId = this.state.user.user.id;
    // this jwt token will be saved in express server and send back to react so that it is secured
    // const jwtToken = this.props.user.jwt;

    const updateUserRes = await axios({
      method: "PUT",
      url: `/users/${userId}`,
      data
    });
    console.log("update ", updateUserRes);
  };

  //handle shipping

  handleShippingChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log("Handlechange /orders ", e.target.value);
  };

  // handleSubmit functions
  handleShippingSubmit = async e => {
    e.preventDefault();
    console.log("handlesubmit /orders  called");

    axios
      .post("http://localhost:1337/orders", this.state)
      .then(response => {
        console.log("Data uploaded");

        this.setState({
          proceedToCheckout: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  //end of user creation

  render() {
    return (
      <AuthenticationContext.Provider
        value={{
          ...this.state,
          handleLoginSubmit: this.handleLoginSubmit,
          handleLoginChange: this.handleLoginChange,
          handleSignUpChange: this.handleSignUpChange,
          handleSignUpSubmit: this.handleSignUpSubmit,
          handleShippingSubmit: this.handleShippingSubmit,
          handleShippingChange: this.handleShippingChange,
          handleProfileUpdateChange: this.handleProfileUpdateChange,
          handleProfileUpdateSubmit: this.handleProfileUpdateSubmit,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthenticationContext.Provider>
    );
  }
}

const AuthenticationConsumer = AuthenticationContext.Consumer;
export { AuthenticationConsumer, AuthenticationProvider };

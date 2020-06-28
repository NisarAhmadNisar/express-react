import React, { Component } from "react";
import { handleChange } from "../../utils/inputs";
// import { API_URL } from "../../utils/url";
import axios from "axios";
import { AuthenticationConsumer } from "./autheticationapi";
import "semantic-ui-css/semantic.min.css";

export default class ProfilePage extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       bio: "",
  //       oneLiner: ""
  //     };
  //     this.handleChange = handleChange.bind(this);
  //   }

  //   componentDidMount() {
  //     if (this.props.user && this.props.user.user) {
  //       const { bio, fav_oneliner } = this.props.user.user;
  //       console.log("Profile bio", bio);
  //       console.log("Profile oneliner", fav_oneliner);
  //       this.setState({ bio: bio, oneLiner: fav_oneliner });
  //     }
  //   }

  //   //sending the data that the user updated in his profile page
  //   handleSubmit = async e => {
  //     e.preventDefault();

  //     const { bio, oneLiner } = this.state;

  //     const data = {
  //       bio,
  //       fav_oneliner: oneLiner
  //     };

  //     const userId = this.props.user.user.id;
  //     // this jwt token will be saved in express server and send back to react so that it is secured
  //     // const jwtToken = this.props.user.jwt;

  //     const updateUserRes = await axios({
  //       method: "PUT",
  //       url: `/users/${userId}`,
  //       data
  //     });
  //     console.log("update ", updateUserRes);
  //   };

  render() {
    // const { user } = this.props;
    // const { bio, oneLiner } = this.state;
    return (
      <AuthenticationConsumer>
        {value => {
          const { bio, oneLiner } = value;
          const {
            handleProfileUpdateChange,
            handleProfileUpdateSubmit
          } = value;
          //   //sending the data that the user updated in his profile page

          if (value.isLogged) {
            return (
              <div className="ProfilePage container">
                <h1 className="text-center text-primary text-capitalize">
                  Profile
                </h1>
                <div className="row">
                  <div className="col-10 mx-auto">
                    <form onSubmit={handleProfileUpdateSubmit}>
                      <div className="form-group">
                        <label htmlFor="bio">Bio:</label>
                        <input
                          className="form-control"
                          type="text"
                          id="bio"
                          name="bio"
                          value={bio}
                          onChange={handleProfileUpdateChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="oneliner">Oneliner:</label>
                        <input
                          className="form-control"
                          type="text"
                          id="oneliner"
                          name="oneLiner"
                          value={oneLiner}
                          onChange={handleProfileUpdateChange}
                        />
                      </div>
                      <button className="btn btn-outline-primary" type="submit">
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            );
          }
          if (!value.isLogged) {
            this.props.history.push("/login");
          }
        }}
      </AuthenticationConsumer>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
import ResponseComment from "./responseComment";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      article: props.articleId,
      responseName: "",
      responseEmail: "",
      responseMessage: "",
      responseDone: false
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();

    axios
      .post("http://localhost:1337/comments", this.state)
      .then(response => {
        console.log("Data uploaded");

        this.setState({
          name: "",
          email: "",
          message: "",
          article: this.props.articleId,
          responseName: response.data.name,
          responseEmail: response.data.email,
          responseMessage: response.data.message,
          response: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    //Comments Form - submit a comment
    const {
      name,
      email,
      message,
      articleId,
      responseEmail,
      responseMessage,
      responseName
    } = this.state;
    return (
      <div>
        {this.state.response ? (
          <div>
            {/* RESPONSE with */}
            <ResponseComment
              responseEmail={responseEmail}
              responseMessage={responseMessage}
              responseName={responseName}
            />

            <div className="container">
              <h2>Leave a comment</h2>
              <div className="row">
                <div className="col-sm-12 col-md-10 col-lg-10">
                  <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                      <label htmlFor="message">Message: </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Write message"
                        rows="5"
                        value={message}
                        onChange={this.changeHandler}
                        required
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="enter your name"
                        value={name}
                        onChange={this.changeHandler}
                        required
                      />
                    </div>
                    <label htmlFor="email">Email: </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        value={email}
                        onChange={this.changeHandler}
                        required
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">@example.com</span>
                      </div>
                    </div>

                    <input type="hidden" name="articleId" value={articleId} />
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <h2>Leave a comment</h2>
            <div className="row">
              <div className="col-sm-12 col-md-10 col-lg-10">
                <form onSubmit={this.submitHandler}>
                  <div className="form-group">
                    <label htmlFor="message">Message: </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Write message"
                      rows="5"
                      value={message}
                      onChange={this.changeHandler}
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="enter your name"
                      value={name}
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <label htmlFor="email">Email: </label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      value={email}
                      onChange={this.changeHandler}
                      required
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">@example.com</span>
                    </div>
                  </div>

                  <input type="hidden" name="articleId" value={articleId} />
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PostForm;

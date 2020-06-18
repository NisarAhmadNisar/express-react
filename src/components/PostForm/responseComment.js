import React from "react";

class ResponseComment extends React.Component {
  render() {
    return (
      <div>
        {/* response comments  */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h6>
                <strong>Name:</strong> {this.props.responseName}
              </h6>
              <h6>
                <strong>Email:</strong> {this.props.responseEmail}
              </h6>
              <p>
                <strong>Message:</strong> {this.props.responseMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResponseComment;

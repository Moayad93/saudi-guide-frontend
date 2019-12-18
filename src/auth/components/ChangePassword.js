import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { changePassword } from "../api";
import messages from "../messages";

class ChangePassword extends Component {
  constructor() {
    super();

    this.state = {
      oldPassword: "",
      newPassword: ""
    };
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onChangePassword = event => {
    event.preventDefault();

    const { alert, history, user } = this.props;

    changePassword(this.state, user)
      .then(() => alert(messages.changePasswordSuccess, "success"))
      .then(() => history.push("/trips"))
      .catch(error => {
        console.error(error);
        this.setState({ oldPassword: "", newPassword: "" });
        alert(messages.changePasswordFailure, "danger");
      });
  };

  render() {
    const { oldPassword, newPassword } = this.state;

    return (
      <form
        className="w-50 mx-auto card px-5 my-5"
        onSubmit={this.onChangePassword}
      >
        <div className="form-row">
          <section className="col-12 my-5">
            <h3>Change your password</h3>
          </section>
          <section className="col-12">
            <input
              className="form-control"
              required
              name="oldPassword"
              value={oldPassword}
              type="password"
              placeholder="Old Password"
              onChange={this.handleChange}
            />
          </section>
          <section className="col-12">
            <input
              className="form-control"
              required
              name="newPassword"
              value={newPassword}
              type="password"
              placeholder="New Password"
              onChange={this.handleChange}
            />
          </section>
          <section className="col-12 my-5 text-center">
            <button className="btn btn-green w-25" type="submit">
              Change
            </button>
          </section>
        </div>
      </form>
    );
  }
}

export default withRouter(ChangePassword);

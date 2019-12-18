import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { signIn } from "../api";
import messages from "../messages";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onSignIn = event => {
    event.preventDefault();

    const { alert, history, setUser } = this.props;

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, "success"))
      .then(() => history.push("/trips"))
      .catch(error => {
        console.error(error);
        this.setState({ email: "", password: "" });
        alert(messages.signInFailure, "danger");
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className="w-50 mx-auto card px-5 my-5" onSubmit={this.onSignIn}>
        <div className="form-row">
          <section className="col-12 my-5">
            <h3>Sign In</h3>
          </section>
          <section className="col-12">
            <input
              className="form-control"
              required
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={this.handleChange}
            />
          </section>
          <section className="col-12">
            <input
              className="form-control"
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </section>
          <section className="col-12 my-5 text-center">
            <button className="btn btn-green w-25" type="submit">
              Sign In
            </button>
          </section>
        </div>
      </form>
    );
  }
}

export default withRouter(SignIn);

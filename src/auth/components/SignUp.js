import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Col, Row } from "react-bootstrap";
import { signUp, signIn } from "../api";
import messages from "../messages";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      passwordConfirmation: "",
      firstName: "",
      lastName: "",
      role: ""
    };
  }

  handleChange = event => {
    if (event.target.name === "role") {
      this.setState({
        role: event.target.value
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  onSignUp = event => {
    event.preventDefault();

    const { alert, history, setUser } = this.props;
    // console.log("=====");

    // console.log(this.state)
    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, "success"))
      .then(() => history.push("/trips"))
      .catch(error => {
        console.error(error);
        this.setState({
          email: "",
          password: "",
          passwordConfirmation: "",
          firstName: "",
          lastName: "",
          role: ""
        });
        alert(messages.signUpFailure, "danger");
      });
  };

  render() {
    const {
      email,
      password,
      passwordConfirmation,
      firstName,
      lastName,
      // role
    } = this.state;

    return (
      <React.Fragment>
        <form
          className="w-50 mx-auto card px-5"
          onSubmit={this.onSignUp}
          >
          <div className="form-row">
          <section className="col-12 my-5">
            <h3>Create your account</h3>
          </section>
            <section className="col-md-6">
              <input
                className="form-control"
                required
                name="firstName"
                value={firstName}
                type="text"
                placeholder="First Name"
                onChange={this.handleChange}
                autoComplete="no"
              />
            </section>
            <section className="col-md-6">
              <input
                className="form-control"
                required
                name="lastName"
                value={lastName}
                type="text"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </section>
            <section className="col-12">
              <input
                className="form-control"
                required
                name="email"
                value={email}
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </section>
            <section className="col-md-6">
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
            <section className="col-md-6">
              <input
                className="form-control"
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </section>
            {/* </div> */}

            {/* <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Role
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Tourist"
                value="Tourist"
                name="formHorizontalRadios"
                id="tourist"
                onChange={this.handleChange}
              />
              <Form.Check
                type="radio"
                label="Agent"
                value="Agent"
                name="formHorizontalRadios"
                id="agent"
                onChange={this.handleChange}
              />
            </Col>
          </Form.Group> */}

            <section className="col mt-5 text-right">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  label="Tourist"
                  value="Tourist"
                  name="role"
                  id="tourist"
                  onChange={this.handleChange}
                />
                <label className="form-check-label text-muted" for="tourist">
                  Tourist
                </label>
              </div>
            </section>
            <section className="col mt-5">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  label="Agent"
                  value="Agent"
                  name="role"
                  id="agent"
                  onChange={this.handleChange}
                />
                <label className="form-check-label text-muted" for="agent">
                  Agent
                </label>
              </div>
            </section>
            <section className="col-12 my-5 text-center">
              <button className="btn btn-green w-25" type="submit">
                Sign Up
              </button>
            </section>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(SignUp);

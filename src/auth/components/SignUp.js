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

  handleChange = event =>{
    if(event.target.name === "formHorizontalRadios"){
      this.setState({
        role: event.target.value
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  }

  onSignUp = event => {
    event.preventDefault();

    const { alert, history, setUser } = this.props;
    // console.log("=====");
    
    // console.log(this.state)
    signUp(this.state)
    
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, "success"))
      .then(() => history.push("/"))
      .catch(error => {
        console.error(error);
        this.setState({
          email: "",
          password: "",
          passwordConfirmation: "",
          firstName: "",
          lastName: "",
          role:""
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
      role
    } = this.state;

    return (
      <form className="auth-form" onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <label htmlFor="firstName">First Name</label>
        <input
          required
          name="firstName"
          value={firstName}
          type="text"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          required
          name="lastName"
          value={lastName}
          type="text"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Role
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Tourist"
              value='Tourist'
              name="formHorizontalRadios"
              id="tourist"
              onChange={this.handleChange}
            />
            <Form.Check
              type="radio"
              label="Agent"
              value='Agent'
              name="formHorizontalRadios"
              id="agent"
              onChange={this.handleChange}
            />
          </Col>
        </Form.Group>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default withRouter(SignUp);
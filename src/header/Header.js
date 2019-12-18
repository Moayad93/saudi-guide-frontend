import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password" className="dropdown-item">
      Change Password
    </Link>
    <div className="dropdown-divider"></div>
    <Link to="/sign-out" className="dropdown-item">
      Sign Out
    </Link>
  </React.Fragment>
);

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up" className="dropdown-item">
      Sign Up
    </Link>
    <Link to="/sign-in" className="dropdown-item">
      Sign In
    </Link>
  </React.Fragment>
);

const alwaysOptions = (
  <React.Fragment>
    <li className="nav-item">
      <Link to="/trips" className="nav-link">
        Home
      </Link>
    </li>
    <li>
    <Link to="/about" className="nav-link">
      About
    </Link>
    </li>
    <li>
    <Link to="/contact" className="nav-link">
      Contact
    </Link>
    </li>
  </React.Fragment>
);

const Header = ({ user }) => (
  <React.Fragment>
    <nav className="col-12 navbar navbar-expand-sm navbar-dark bg-cantaloupe">
      <Link to="/trips" className="navbar-brand">
        Saudi Guide
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {alwaysOptions}
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="zmdi zmdi-account-circle zmdi-hc-lg"></i>
            </span>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {user ? authenticatedOptions : unauthenticatedOptions}
            </div>
          </li>
        </ul>
        {user && (
          <span className="my-2 my-lg-0">Welcome, {user.firstName}</span>
        )}
      </div>
    </nav>
    {/* <header className="col-12 bg-dark">
      <h1>Saudi Guide</h1>
    </header> */}
  </React.Fragment>
);

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
);

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up" className="nav-link">Sign Up</Link>
    <Link to="/sign-in" className="nav-link">Sign In</Link>
  </React.Fragment>
);

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
);

const Header = ({ user }) => (
  // <header className="main-header">
  <header className="col-12">
    <h1>Saudi Guide</h1>
    <nav>
      {user && <span>Welcome, {user.email}</span>}
      {user ? authenticatedOptions : unauthenticatedOptions}
      {alwaysOptions}
    </nav>
  </header>
);

export default Header;

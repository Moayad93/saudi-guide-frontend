import React from "react";

import "./Footer.scss";

const Header = ({ user }) => (
  <footer className="col-12 bg-secondary p-3 text-center">
    <small className="text-light">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved. Built with{" "}
      <span className="text-danger">&hearts;</span> by{" "}
      <span className="text-success">Saudi Guide</span>
    </small>
  </footer>
);

export default Header;

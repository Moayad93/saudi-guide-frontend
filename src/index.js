import React from "react";
import ReactDOM from "react-dom";

import "bootswatch/dist/materia/bootstrap.min.css";
import "./customize.scss";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const appJsx = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(appJsx, document.getElementById("root"));

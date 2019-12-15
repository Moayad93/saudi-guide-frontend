import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const TripForm = props => {

  console.log("TripForm", props);
  console.log(props.match.params.id);

  return (
    <React.Fragment>
      <center>
        <h1>XXXXXXXXXXXX</h1>
      </center>
    </React.Fragment>
  );
};

export default withRouter(TripForm);

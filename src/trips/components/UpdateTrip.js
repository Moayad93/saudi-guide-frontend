import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { updateTrip } from "../api";

class UpdateTrip extends Component {
  render() {
    console.log();

    return (
      <React.Fragment>
        <Link to={"/trip-form/" + this.props.id} className="btn btn-primary">
          Edit
        </Link>
      </React.Fragment>
    );
  }
}

export default withRouter(UpdateTrip);

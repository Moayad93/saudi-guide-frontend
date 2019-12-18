import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { updateTrip } from "../api";
import TripForm from "./TripForm";

class UpdateTrip extends Component {
  render() {
    return (
      <React.Fragment>
        <Link
          to={`/trip-form/${this.props.id}`}
          // onClick={this.updateTripMethod}
          render={() => <TripForm />}
          className="btn btn-blue"
        >
          Edit
        </Link>
      </React.Fragment>
    );
  }
}

export default withRouter(UpdateTrip);

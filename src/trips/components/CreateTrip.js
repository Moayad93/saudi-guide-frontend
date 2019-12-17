import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import TripForm from "./TripForm";
class CreateTrip extends Component {
  render() {
    return (
      <React.Fragment>
        <Link
          to={`/trip-form`}
          render={() => <TripForm />}
          className="btn btn-primary"
        >
          Create new Trip
        </Link>
      </React.Fragment>
    );
  }
}

export default withRouter(CreateTrip);

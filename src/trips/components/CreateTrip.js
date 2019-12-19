import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import TripForm from "./TripForm";
class CreateTrip extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="text-center">
          <Link
            to={`/trip-form`}
            render={() => <TripForm />}
            className="btn btn-green"
          >
            Create new Trip
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(CreateTrip);

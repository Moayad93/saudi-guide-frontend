import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { updateTrip } from "../api";
import TripForm from "./TripForm";

class UpdateTrip extends Component {
  updateTripMethod = () => {
    console.log("updateTripMethod", this.props);

    // deleteTrip(this.props.id)
    //   .then(res => {
    //     const newTripList = this.props.trips.filter(trip => {
    //       return trip._id !== this.props.id;
    //     });
    //     this.props.setTrips(newTripList);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <React.Fragment>
        <Link
          to={`/trip-form/${this.props.id}`}
          onClick={this.updateTripMethod}
          render={() => <TripForm />}
          className="btn btn-primary"
        >
          Edit
        </Link>
      </React.Fragment>
    );
  }
}

export default withRouter(UpdateTrip);

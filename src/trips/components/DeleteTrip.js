import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { deleteTrip } from "../api";

class DeleteTrip extends Component {
  deleteTripMethod = () => {
    console.log(this.props.id);

    deleteTrip(this.props.id)
      .then(res => {
        const newTripList = this.props.trips.filter(trip => {
          return trip._id !== this.props.id;
        });
        this.props.setTrips(newTripList);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-danger" onClick={this.deleteTripMethod}>
          Delete
        </button>
      </React.Fragment>
    );
  }
}

export default withRouter(DeleteTrip);

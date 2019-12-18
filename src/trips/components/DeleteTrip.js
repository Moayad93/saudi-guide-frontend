import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { deleteTrip } from "../api";
import "./DeleteTrip.scss"

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
        <Link className="btn btn-red" to="#" onClick={this.deleteTripMethod}>
          Delete
        </Link>
      </React.Fragment>
    );
  }
}

export default withRouter(DeleteTrip);

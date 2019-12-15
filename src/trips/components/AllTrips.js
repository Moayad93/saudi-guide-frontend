import React, { Component } from "react";
import { allTrips } from "../api";
import Trip from "./Trip";

class AllTrips extends Component {
  componentDidMount() {
    allTrips()
      .then(res => {
        this.props.setTrips(res.data.trips);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let allTrips = <h2>No Trips</h2>;

    if (this.props.trips.length > 0) {
      allTrips = this.props.trips.map((trip, index) => {
        return (
          <Trip
            id = {trip._id}
            title={trip.title}
            description={trip.description}
            startDate={trip.startDate}
            endDate={trip.endDate}
            guide={trip.guide}
            activities={trip.activities}
            recommendation={trip.recommendation}
            includedInTrip={trip.includedInTrip}
            whatToBring={trip.whatToBring}
            trips={this.props.trips}
            setTrips={this.props.setTrips}
            user={this.props.user}
            key={index}
          />
        );
      });
    }
    return allTrips;
  }
}

export default AllTrips;

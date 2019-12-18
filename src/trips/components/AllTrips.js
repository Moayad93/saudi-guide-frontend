import React, { Component } from "react";
import { allTrips} from "../api";
import Trip from "./Trip";
import { Link } from "react-router-dom";
import TripForm from "./TripForm";
import { Button } from "react-bootstrap";
import CreateTrip from "./CreateTrip"

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
    console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", this.props.user);
    let allTrips = <h2>No Trips</h2>;

    if (this.props.trips.length > 0) {
      allTrips = this.props.trips.map((trip, index) => {
        return (
          <Trip
            id={trip._id}
            title={trip.title}
            description={trip.description}
            image={trip.image}
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
    return (
      <React.Fragment>
        <CreateTrip />
        {allTrips}
      </React.Fragment>
    )
  }
}

export default AllTrips;

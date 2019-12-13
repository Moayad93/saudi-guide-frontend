import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { allTrips } from "../api";

class AllTrips extends Component {
  constructor() {
    super();

    this.state = {
      trips: []
    };
  }

  componentDidMount() {
    this.setState({
      trips: allTrips.data.trips
    });
    console.log(this.state.trips);
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.trips}</h1>
      </React.Fragment>
    );
  }
}

export default withRouter(AllTrips);

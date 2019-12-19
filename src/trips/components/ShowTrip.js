import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { showTrip } from "../api";
import CreateActivity from "../../activities/components/CreateActivity";
import DeleteActivity from "../../activities/components/DeleteActivity";
import "./ShowTrip.scss";

class ShowTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trip: {
        title: "",
        description: "",
        image: "",
        activities: [],
        includedInTrip: [{}],
        whatToBring: [{}],
        startDate: "",
        endDate: "",
        recommendation: "",
        guide: "", // add your user id in this feild. this is my user
        city: "",
        address: ""
      }
    };
  }

  showTripMethod = () => {
    console.log("I am in");
    showTrip(this.props.match.params.id)
      .then(res => {
        // console.log(res.data.trip);
        this.setState({
          trip: res.data.trip
        });
      })
      .catch(err => { });
  };

  componentDidMount() {
    this.showTripMethod();
  }

  render() {
    console.log("=============");
    console.log(this.props.trips);

    let allActivities;
    let timelinePosition = "";
    if (this.state.trip.activities.length > 0) {
      allActivities = this.state.trip.activities.map((activity, index) => {
        return (
          <React.Fragment>
            <div>
              <div className="d-none">
                {
                  (timelinePosition =
                    timelinePosition === "right" ? "left" : "right")
                }
              </div>
              <section
                className={`timeline-block timeline-block-${timelinePosition}`}
                key={index}
              >
                <span className="marker"></span>
                <article className="timeline-content">
                  <h3>{activity.title}</h3>
                  <span>Some work experience</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </p>
                  {this.props.user?
                  this.props.user.role === "Agent" ?
                    <DeleteActivity
                      showTripMethod={this.showTripMethod}
                      id={activity._id}
                      setTrips={this.props.setTrips}
                    /> : null
                    :null
                  }
                </article>
              </section>
            </div>
          </React.Fragment>
        );
      });
    } else {
      allActivities = <h2> No Activity </h2>;
    }
    console.log(this.state.trip);
    //====  this is a werid way to find your state.. Need to be discussed tmr with you guys
    // console.log(allActivities._self.state.trip.activities);

    return (
      <React.Fragment>
        <section className="col-12 my-5 text-center">
          {this.props.user ?
            this.props.user.role === "Agent" ?
              <CreateActivity id={this.props.match.params.id} />
              : null
            : null
          }
        </section>
        <h1>Title : {this.state.trip.title} </h1>
        <h1>Description: {this.state.trip.description}</h1>
        <h1>City: {this.state.trip.city}</h1>
        <h1>Start Date: {new Date(this.state.trip.startDate).getDay()}-{new Date(this.state.trip.startDate).getMonth()}-{new Date(this.state.trip.startDate).getFullYear()}</h1>
        <h1>End Date: {new Date(this.state.trip.endDate).getDay()}-{new Date(this.state.trip.endDate).getMonth()}-{new Date(this.state.trip.endDate).getFullYear()}</h1>
        {/* <img src={this.state.trip.image} alt="ffff" /> */}

        <section className="timeline-container">{allActivities}</section>
      </React.Fragment>
    );
  }
}

export default withRouter(ShowTrip);

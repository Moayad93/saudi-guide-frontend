import React from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import DeleteTrip from "./DeleteTrip";
import UpdateTrip from "./UpdateTrip";
import ShowTrip from "./ShowTrip";
import "./Trip.scss";

const Trip = props => {
  let activities;
  if (props.activities) {
    activities = props.activities.map(activity => {
      return <p key={activity._id}> {activity.title}</p>;
    });
  }
  console.log("ShowTrip", props.id);
  return (
    <React.Fragment>
      <center>
        <h1>Trip Info</h1>
      </center>
      <div className="card w-50 mx-auto">
        <Link
          to={"/show-trip/" + props.id}
          render={() => (
            <ShowTrip
              // id={props.id}
              // trips={props.trips}
              // setTrips={props.setTrips}
            />
          )}
          className="text-decoration-none remove-link-decoration"
        >
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.description}
            </h6>
            <p className="card-text">
              {Date(props.startDate).toLocaleString()}
            </p>
            <p className="card-text">{Date(props.endDate).toLocaleString()}</p>
            <p className="card-text">{props.guide}</p>
            {activities}
            <p className="card-text">{props.recommendation}</p>
            {!props.user ? (
              <React.Fragment>
                <DeleteTrip
                  id={props.id}
                  trips={props.trips}
                  setTrips={props.setTrips}
                />
                <UpdateTrip
                  id={props.id}
                  trips={props.trips}
                  setTrips={props.setTrips}
                />
              </React.Fragment>
            ) : null}
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Trip;

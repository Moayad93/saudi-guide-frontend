import React from "react";
import { withRouter, Link } from "react-router-dom";
import DeleteTrip from "./DeleteTrip";
import UpdateTrip from "./UpdateTrip";

const Trip = props => {
  let activities;
  if (props.activities) {
    activities = props.activities.map(activity => {
      return <p key={activity._id}> {activity.title}</p>;
    });
  }
  return (
    <React.Fragment>
      <center>
        <h1>Trip Info</h1>
      </center>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.description}</h6>
          <p className="card-text">{Date(props.startDate).toLocaleString()}</p>
          <p className="card-text">{Date(props.endDate).toLocaleString()}</p>
          <p className="card-text">{props.guide}</p>
          {activities}
          <p className="card-text">{props.recommendation}</p>
          {props.user ? (
            <div>
              <DeleteTrip
                id={props.id}
                trips={props.trips}
                setTrips={props.setTrips}
              />
              <Link
                to={"/update-trip/" + props.id}
                render={() => (
                  <UpdateTrip
                    id={props.id}
                    trips={props.trips}
                    setTrips={props.setTrips}
                  />
                )}
                className="btn btn-primary"
              >
                Edit
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Trip;

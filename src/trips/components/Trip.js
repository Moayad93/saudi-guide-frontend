import React from "react";
import DeleteTrip from "./DeleteTrip";
import UpdateTrip from "./UpdateTrip";

const Trip = props => {
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
          <p className="card-text">{props.activities}</p>
          <p className="card-text">{props.recommendation}</p>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default Trip;

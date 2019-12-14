import React from "react";

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
          {/* <p class="card-text">{props.includedInTrip}</p> */}
          {/* <p class="card-text">{props.whatToBring}</p> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Trip;

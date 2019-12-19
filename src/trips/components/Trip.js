import React from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import DeleteTrip from "./DeleteTrip";
import UpdateTrip from "./UpdateTrip";
import ShowTrip from "./ShowTrip";
import "./Trip.scss";
import BookTrip from "./BookTrip";

const Trip = props => {
  let activities;
  if (props.activities) {
    activities = props.activities.map(activity => {
      return <p key={activity._id}> {activity.title}</p>;
    });
  }
  console.log("=========");
  console.log(props.id);
  console.log("=========");
  return (
    <React.Fragment>
      <section className="col-4 my-5">
        <div className="card w-75 mx-auto trip-card">
          <Link
            to={`/show-trip/${props.id}`}
            render={() => (
              <ShowTrip
              // id={props.id}
              // trips={props.trips}
              // setTrips={props.setTrips}
              />
            )}
            className="text-decoration-none remove-link-decoration"
          >
            <img class="card-img-top" src={props.image} />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {props.description}
              </h6>
              <span className="card-text">{new Date(props.startDate).getDay()}-{new Date(props.startDate).getMonth()}-{new Date(props.startDate).getFullYear()}</span>&nbsp;—&nbsp; 
              <span className="card-text">{new Date(props.endDate).getDay()}-{new Date(props.endDate).getMonth()}-{new Date(props.endDate).getFullYear()}</span>
              {props.user ?
                props.user.role === "Agent" ? (
                  <React.Fragment>
                    <div className="form-row mt-3">
                      <section className="col text-right">
                        <DeleteTrip
                          id={props.id}
                          trips={props.trips}
                          setTrips={props.setTrips}
                        />
                      </section>
                      <section className="col">
                        <UpdateTrip
                          id={props.id}
                          trips={props.trips}
                          setTrips={props.setTrips}
                        />
                      </section>
                      {props.user.role === "Tourist" ? (
                        <section className="col">
                          <BookTrip />
                        </section>
                      ) : null}
                    </div>
                  </React.Fragment>
                ) : null
                : null}
            </div>
          </Link>
        </div></section>
    </React.Fragment>
  );
};

export default Trip;

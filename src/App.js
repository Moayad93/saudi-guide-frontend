import React, { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";

import AuthenticatedRoute from "./auth/components/AuthenticatedRoute";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import About from "./about/About";
import SignUp from "./auth/components/SignUp";
import SignIn from "./auth/components/SignIn";
import SignOut from "./auth/components/SignOut";
import ChangePassword from "./auth/components/ChangePassword";
import AlertDismissible from "./auth/components/AlertDismissible";
import Contact from "./contact/Contact"
import AllTrips from "./trips/components/AllTrips";
import CreateTrip from "./trips/components/CreateTrip";
import ShowTrip from "./trips/components/ShowTrip";
import UpdateTrip from "./trips/components/UpdateTrip";
import DeleteTrip from "./trips/components/DeleteTrip";
import TripForm from "./trips/components/TripForm";
import ActivityForm from "./activities/components/ActivityForm";
import DeleteActivity from "./activities/components/DeleteActivity"
class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      alerts: [],
      trips: []
    };
  }

  setUser = user => this.setState({ user });

  setTrips = trips => this.setState({ trips: trips });
  // setTrips = trips => {
  //   console.log("i am in tripf yoo hoo");
  //   this.setState({ trips: trips })};


  clearUser = () => this.setState({ user: null });

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] });
  };

  render() {
    const { alerts, user } = this.state;
console.log("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", user);
    return (
      <React.Fragment>
        {/* WRAPPER */}
        <div className="row transparent-div">
          {/* HEADER */}
          <Header user={user} />

          {/* MAIN */}
          <main className="col-12 bg-transparent push-footer p-3">
            {alerts.map((alert, index) => (
              <AlertDismissible
                key={index}
                variant={alert.type}
                message={alert.message}
              />
            ))}
            <Route
              exact
              path="/sign-up"
              render={() => (
                <SignUp alert={this.alert} setUser={this.setUser} />
              )}
            />
            <Route
              exact
              path="/sign-in"
              render={() => (
                <SignIn alert={this.alert} setUser={this.setUser} />
              )}
            />
            <Route
              exact
              path="/about"
              render={() => (
                <About />
              )}
            />
            <Route
              exact
              path="/contact"
              render={() => (
                <Contact />
              )}
            />
            <Route
              exact
              path="/trips"
              render={() => (
                <AllTrips
                  trips={this.state.trips}
                  setTrips={this.setTrips}
                  user={user}
                />
              )}
            />
            <Route
              exact
              path="/create-trip"
              render={() => (
                <CreateTrip trips={this.state.trips} setTrips={this.setTrips} />
              )}
            />
            <Route
              exact
              path="/show-trip/:id"
              render={() => (
                <ShowTrip trips={this.state.trips} setTrips={this.setTrips} user={user} />
              )}
            />
            <Route
              exact
              path="/update-trip/:id"
              render={() => (
                <UpdateTrip trips={this.state.trips} setTrips={this.setTrips} />
              )}
            />
            <Route
              exact
              path="/delete-trip"
              render={() => (
                <DeleteTrip trips={this.state.trips} setTrips={this.setTrips} />
              )}
            />

            <Route
              exact
              path="/trip-form/:id"
              render={() => (
                <TripForm trips={this.state.trips} setTrips={this.setTrips} />
              )}
            />
            <Route
              exact
              path="/trip-form"
              render={() => (
                <TripForm trips={this.state.trips} setTrips={this.setTrips} user={user} />
              )}
            />
            <Route
              exact
              path="/show-trip/:id/activity-form"
              render={() => (
                <ActivityForm trips={this.state.trips} setTrips={this.setTrips} user={user} />
              )} />

            <Route
              exact
              path="/delete-activity"
              render={() => (
                <DeleteActivity trips={this.state.trips} setTrips={this.setTrips} />
              )}
            />

            <AuthenticatedRoute
              user={user}
              exact
              path="/sign-out"
              render={() => (
                <SignOut
                  alert={this.alert}
                  clearUser={this.clearUser}
                  user={user}
                />
              )}
            />
            <AuthenticatedRoute
              user={user}
              exact
              path="/change-password"
              render={() => <ChangePassword alert={this.alert} user={user} />}
            />
          </main>

          {/* FOOTER */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

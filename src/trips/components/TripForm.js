import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { updateTrip, createTrip, showTrip } from "../api";

class TripForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {
        title: "",
        description: "",
        activities: [],
        includedInTrip: [],
        whatToBring: [],
        startDate: "",
        endDate: "",
        recommendation: [],
        location: "",
        guide: ""
        // city: "",
        // address: "",
      }
    };
  }

  createTripMethod = data => {
    console.log("I am in createTrip Method");
    console.log("==========");
    console.log(data);
    console.log("==========");

    createTrip({ trip: data })
      .then(res => {
        this.props.history.push("/");
        // this.setState({ ...this.state, trip: res.data })
        this.props.setTrips([...this.props.trips, data]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateTripMethod = data => {
    console.log("xxxxxxxxx");
    console.log(data);
    console.log("xxxxxxxxx");

    console.log("I am in updateTripMethod");
    updateTrip(this.props.match.params.id, data)
      .then(res => {
        this.props.history.push(`/trips/${this.props.match.params.id}`);
        console.log("=======");
        console.log("res", res);
        console.log("=======");
        this.setState({ ...this.state, trip: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      showTrip(this.props.match.params.id)
        .then(res => {
          let x = new Date();
          console.log("(___________________res\n", res);
          console.log("(___________________res.data\n", res.data);
          console.log(
            "(___________________res.data.trip.date\n",
            new Date(res.data.trip.startDate).getDay()
          );
          console.log(
            "(___________________res.data.trip.date\n",
            new Date(res.data.trip.startDate).getMonth()
          );
          console.log(
            "(___________________res.data.trip.date\n",
            new Date(res.data.trip.startDate).getFullYear()
          );
          this.setState({ ...this.state, trip: res.data.trip });
        })
        .catch(err => {
          console.log(err);
        });
    }
    console.log(this.state);
  }

  handleChange = e => {
    const state = this.state.trip; // copy  the state trip
    state[e.target.name] = e.target.value; // listen to the change and save it to the state att
    this.setState({
      trip: state // set trip to state which is the updated versionn in this case
    });
  };

  handleCheckBox = e => {
    // console.log("Target Name: " + e.target.name);
    // console.log("Target Value: " + e.target.value);
    let attr = [];
    let value = e.target.checked;
    // console.log("Target Checked: " + e.target.checked);
    this.setState({
      [e.target.name]: [...attr, value]
    });
    if (e.target.name === "whatToBring") {
      if (e.target.checked) {
        // e.target.value = [...new Set(this.state.trip.whatToBring)];
        this.state.trip.whatToBring.push(e.target.value);
        console.log("What To Bring", this.state.trip.whatToBring);
      }
    }
    if (e.target.name === "includedInTrip") {
      if (e.target.checked) {
        // e.target.value = [...new Set(this.state.trip.includedInTrip)];
        this.state.trip.includedInTrip.push(e.target.value);
        console.log("Included In Trip", this.state.trip.includedInTrip);
      }
    }
    // for (let i = 0; i <= e.target.name.length; i++) {
    //   if (e.target.name.indexOf(e.target.value) > -1) {
    //     if (e.target.checked){
    //       e.target.name.push(e.target.value)
    //     }
    //     else {
    //       e.target.name.slice(e.target.name.indexOf(e.target.value), 1)
    //     }
    //   }
    // }
    // console.log("setState: " + attr + value);
    // console.log(this.state.trip);
  };

  onSubmitUpdateMethod = e => {
    e.preventDefault();

    const data = {
      trip: this.state.trip
    };
    this.updateTripMethod(data.trip);
  };

  onSubmitCreateMethod = e => {
    e.preventDefault();

    const data = {
      trip: this.state.trip
    };

    this.createTripMethod(data.trip);
  };

  // onSubmit={this.onSubmitUpdateMethod}
  render() {
    return (
      <React.Fragment>
        <form className="needs-validation" novalidate>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label for="validationCustom01">Title</label>
              <input
                name="title"
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Title"
                value={this.state.trip.title}
                onChange={this.handleChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationCustom02">Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                id="validationCustom02"
                placeholder="Description"
                value={this.state.trip.description}
                onChange={this.handleChange}
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="validationCustomUsername">included In the Trip</label>
              <div className="input-group">
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      name="includedInTrip"
                      className="form-check-input"
                      type="checkbox"
                      id="includedInTrip"
                      onChange={this.handleCheckBox}
                      value="transportaion"
                    />
                    Transportation
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="includedInTrip"
                      value="tourGuide"
                      name="includedInTrip"
                      onChange={this.handleCheckBox}
                    />
                    Tour Guide
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="includedInTrip"
                    value="BbqDinner"
                    name="includedInTrip"
                    onChange={this.handleCheckBox}
                  />
                  <label class="form-check-label">Bbq dinner</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="includedInTrip"
                    value="yogaSession"
                    name="includedInTrip"
                    onChange={this.handleCheckBox}
                  />
                  <label class="form-check-label">Yoga Session</label>
                </div>

                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <label for="validationCustomUsername">What To Bring</label>
            <div className="input-group">
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    name="whatToBring"
                    className="form-check-input"
                    type="checkbox"
                    id="whatToBring"
                    onChange={this.handleCheckBox}
                    value="yogaMat"
                  />
                  Yoga Mat
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="whatToBring"
                    value="snacks"
                    name="whatToBring"
                    onChange={this.handleCheckBox}
                  />
                  Snacks
                </label>
              </div>

              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>

          <div className="form-row">
            {/* <div className="col-md-6 mb-3">
              <label for="validationCustom03">City</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                placeholder="City"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                required
              />
              <div className="invalid-feedback">Please provide a valid city.</div>
            </div> */}
            <div className="col-md-3 mb-3">
              <label for="validationCustom04">Recommendation</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom04"
                placeholder="Recomendation"
                name="recommendation"
                value={this.state.trip.recommendation}
                onChange={this.handleChange}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationCustom05">start Date</label>
              <input
                type="Date"
                className="form-control"
                placeholder="start Date"
                name="startDate"
                value={this.state.trip.startDate}
                onChange={this.handleChange}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid start Date.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationCustom05">End Date</label>
              <input
                type="Date"
                className="form-control"
                placeholder="End Date"
                name="endDate"
                value={this.state.trip.endDate}
                onChange={this.handleChange}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid End Date.
              </div>
            </div>
          </div>
          {/* <div className="col-md-3 mb-3">
            <label for="validationCustom05">Address</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom05"
              placeholder="address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              required
            />
            <div className="invalid-feedback">Please provide a valid address.</div>
          </div> */}
          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.onSubmitUpdateMethod}
          >
            update form
          </button>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={this.onSubmitCreateMethod}
          >
            Submit form
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default withRouter(TripForm);

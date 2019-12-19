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
        image: "",
        activities: [],
        includedInTrip: [
          {
            name: "",
            image: ""
          }
        ],
        whatToBring: [
          {
            name: "",
            image: ""
          }
        ],
        startDate: "",
        endDate: "",
        recommendation: "",
        guide: "5df2104cbdf294053906899b", // add your user id in this feild. this is my user
        city: "",
        address: ""
      }
    };
  }

  createTripMethod = data => {
    console.log("I am in createTrip Method");
    console.log("==========");
    console.log(data);
    console.log("==========");

    createTrip(data)
      .then(res => {
        this.props.history.push("/trips");
        // this.setState({ ...this.state, trip: res.data })
        this.props.setTrips([...this.props.trip, data]);
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
        console.log("=======");
        console.log("res", res);
        console.log("=======");
        this.setState({ ...this.state, trip: res.data });
        this.props.history.push(`/show-trip/${this.props.match.params.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      showTrip(this.props.match.params.id)
        .then(res => {
          this.setState({ ...this.state, trip: res.data.trip });
          // let startDateUpdated = this.state.trip.startDate.split(this.state.trip.startDate.charAt(10))[0];
          // console.log(startDateUpdated);

          // let endDate = this.state.trip.endDate.split(this.state.trip.endDate.charAt(10))[0];
          //   const state = this.state.trip.startDate
          //   state[this.state.trip.startDate]= startDateUpdated
          //   this.setState({
          //     trip: state
          //   });
          console.log(this.state);
        })
        .catch(err => {
          console.log(err);
        });
    }

    console.log("=========");
    console.log(this.state.trip.guide);
    console.log("=========");
  }

  handleChange = e => {
    const state = this.state.trip; // copy  the state trip
    state[e.target.name] = e.target.value; // listen to the change and save it to the state att
    this.setState({
      trip: state // set trip to state which is the updated versionn in this case
    });
  };

  handleCheckBox = e => {
    const newTrip = this.state.trip;

    // newTrip[e.target.name] = [...newTrip[e.target.name], {name: e.target.value , image: "NA"}];

    const index = newTrip[e.target.name].findIndex(item => {
      return item.name === e.target.value;
    });
    if (index == -1) {
      newTrip[e.target.name].push({ name: e.target.value, image: "NA" });
    } else {
      newTrip[e.target.name].splice(index, 1);
    }
    this.setState({
      trip: newTrip
    });
    console.log("setState: ", this.state.trip);
    console.log(this.state.trip);
  };

  onSubmitUpdateMethod = e => {
    e.preventDefault();
    if (
      new Date(this.state.trip.startDate).getFullYear() <=
      new Date(this.state.trip.endDate).getFullYear()
    ) {
      if (
        new Date(this.state.trip.startDate).getMonth() <=
        new Date(this.state.trip.endDate).getMonth()
      ) {
      }
      if (
        new Date(this.state.trip.startDate).getDay() <=
        new Date(this.state.trip.endDate).getDay()
      ) {
        this.updateTripMethod(data.trip);
      }
    } else {
      alert("(End Date) is Invalid");
    }
    const data = {
      trip: this.state.trip
    };
  };

  onSubmitCreateMethod = e => {
    e.preventDefault();
    if (
      new Date(this.state.trip.startDate).getFullYear() <=
      new Date(this.state.trip.endDate).getFullYear()
    ) {
      if (
        new Date(this.state.trip.startDate).getMonth() <=
        new Date(this.state.trip.endDate).getMonth()
      ) {
      }
      if (
        new Date(this.state.trip.startDate).getDay() <=
        new Date(this.state.trip.endDate).getDay()
      ) {
        this.createTripMethod(this.state.trip);
      }
    } else {
      alert("(End Date) is Invalid");
    }
  };

  render() {
    console.log(this.state.trip);

    console.log("this is Start Date: ", this.state.trip.startDate);
    console.log("this is end Date: ", this.state.trip.endDate);
    return (
      <React.Fragment>
        <form className="w-50 mx-auto card px-5 my-5">
          <div className="form-row">
            <section className="col-12 my-5">
              <h3>Create your trip</h3>
            </section>
            <section className="col-6">
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
            </section>
            <section className="col-6">
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
            </section>
            <section className="col-12">
              <input
                type="text"
                name="image"
                className="form-control"
                id="image"
                placeholder="image"
                value={this.state.trip.image}
                onChange={this.handleChange}
                required
              />
            </section>
            <section className="col-12">
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
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="includedInTrip"
                      value="BbqDinner"
                      name="includedInTrip"
                      onChange={this.handleCheckBox}
                    />
                    Bbq dinner</label>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="includedInTrip"
                      value="yogaSession"
                      name="includedInTrip"
                      onChange={this.handleCheckBox}
                    />
                    Yoga Session</label>
                </div>
              </div>
            </section>
            <section className="col-12">
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
              </div>
            </section>

            <section className="col-6">
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                placeholder="City"
                name="city"
                value={this.state.trip.city}
                onChange={this.handleChange}
                required
              />
            </section>

            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="validationCustom04"
                placeholder="Recomendation"
                name="recommendation"
                value={this.state.trip.recommendation}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-6">
              <label for="validationCustom05">Start Date</label>
              <input
                type="Date"
                className="form-control"
                placeholder="start Date"
                name="startDate"
                value={this.state.trip.startDate}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-6">
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
            </div>
          </div>

          {this.props.match.params.id ? (
            <button
              className="btn btn-green"
              type="submit"
              onClick={this.onSubmitUpdateMethod}
            >
              Update
            </button>
          ) : (
            <button
              className="btn btn-green"
              type="submit"
              onClick={this.onSubmitCreateMethod}
            >
              Create
            </button>
          )}
        </form>
      </React.Fragment>
    );
  }
}
export default withRouter(TripForm);

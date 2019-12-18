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
        image:"",
        activities: [],
        includedInTrip: [{
          name: "this",
          image: "hey"
        }],
        whatToBring: [{
            name: "this",
            image: "hey"
          }],
        startDate: "",
        endDate: "",
        recommendation: "",
        guide: "5df2104cbdf294053906899b", // add your user id in this feild. this is my user
        city: "",
        address: "",
      }
    };
  }

  createTripMethod = data => {
    console.log("I am in createTrip Method");
    console.log("==========");
    console.log(data);
    console.log("==========");

    createTrip(data)
      .then((res) => {
        this.props.history.push("/trips")
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
        console.log("=======");
        console.log("res", res);
        console.log("=======");
        this.setState({ ...this.state, trip: res.data })
        this.props.history.push(`/show-trip/${this.props.match.params.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    
    if (this.props.match.params.id) {
      showTrip(this.props.match.params.id)
      .then((res) => {
        this.setState({ ...this.state, trip: res.data.trip })
        // let startDateUpdated = this.state.trip.startDate.split(this.state.trip.startDate.charAt(10))[0];
        // console.log(startDateUpdated);
        
        // let endDate = this.state.trip.endDate.split(this.state.trip.endDate.charAt(10))[0];
        //   const state = this.state.trip.startDate
        //   state[this.state.trip.startDate]= startDateUpdated
        //   this.setState({
        //     trip: state
        //   });
          console.log(this.state);
          
        }).catch((err) => {
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
    console.log("Target Name: " + e.target.name);
    console.log("llllli Name: " + this.state.trip[e.target.name].length);
    console.log("Target Value: " + e.target.value);
    let attr = [];
    let value = e.target.checked;
    console.log("Target Checked: " + e.target.checked);
    this.setState({
      [e.target.name]: [...attr, value]
    });
    // console.log(this.state);
    
    // let cc = [...this.state.trip.whatToBring]
    // if (e.target.name === "whatToBring") {
    //   if (cc.indexOf(e.target.value) == -1) {
    //         if (e.target.checked){
    //           // this.state.trip.whatToBring.push(e.target.value);
    //          cc.push(e.target.value)
    //          console.log(this.state.trip.whatToBring);
    //          let vv = this.state;
    //          vv.trip.whatToBring = cc;
    //          this.setState({trip: vv})
    //          console.log(this.state);
    //         }
    //         else {
    //           // this.state.trip.whatToBring.slice(e.target.name.indexOf(e.target.value), 1)
    //           cc.slice(cc[cc.indexOf(e.target.value)], 1)
    //           let vv = this.state;
    //           vv.trip.whatToBring = cc;
    //           this.setState({trip: vv})
    //         }

    //   ///////
    //   // if (e.target.checked) {
    //   //   // e.target.value = [...new Set(this.state.trip.whatToBring)];
    //   //   this.state.trip.whatToBring.push(e.target.value);
    //     console.log("What To Bring", this.state.trip.whatToBring);
    //   }
    // }
    // if (e.target.name === "includedInTrip") {
    //   if (e.target.checked) {
    //     // e.target.value = [...new Set(this.state.trip.includedInTrip)];
    //     this.state.trip.includedInTrip.push(e.target.value);
    //     console.log("Included In Trip", this.state.trip.includedInTrip);
    //   }
    // }
      for (let i = 0; i <= this.state.trip[e.target.name].length; i++) {
        if (this.state.trip[e.target.name].indexOf(e.target.value) > -1) {
          // console.log("++++++++");
          const newTrip = this.state.trip;
          let newArr = this.state.trip[e.target.name];
          newArr.slice( newArr.indexOf(e.target.value) , 1)
          newTrip[e.target.name] = newArr
          this.setState({trip: newTrip})
          
          // if (e.target.checked){
          //   const newTrip = this.state.trip;
          //  let newArr = this.state.trip[e.target.name];
          //  newArr.push(e.target.value)
          //  newTrip[e.target.name] = newArr
          //  this.setState({trip: newTrip})
            
          //  console.log("-------");
            // e.target.name.push(e.target.value)
          // }
          // else {
            
          //   // e.target.name.slice(e.target.name.indexOf(e.target.value), 1)
          //   console.log("========");
            
          // }
        }else{  
            // console.log("out ELSE");
            
            const newTrip = this.state.trip;
            let newArr = this.state.trip[e.target.name];
            newArr.push(e.target.value)
            newTrip[e.target.name] = newArr
            this.setState({trip: newTrip})
        }
      }
      console.log("setState: ", this.state.trip);
      console.log(this.state.trip);
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

    this.createTripMethod(this.state.trip)
  }

  render() {
    console.log(this.state.trip.startDate);

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
              <label for="validationCustom02">image</label>
              <input
                type="text"
                name="image"
                className="form-control"
                id="validationCustom02"
                placeholder="image"
                value={this.state.trip.image}
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
            <div className="col-md-6 mb-3">
              <label for="validationCustom03">City</label>
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
              <div className="invalid-feedback">Please provide a valid city.</div>
            </div>
          </div>
          <div className="form-row">
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
          <button className="btn btn-primary" type="submit" onClick={this.onSubmitUpdateMethod}>
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

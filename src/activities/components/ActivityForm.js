import React, { Component } from 'react'
import { createActivity } from '../api';
import { Link, withRouter } from 'react-router-dom';
class ActivityForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activity: {
        title: "",
        description: "",
        category: "",
        image: "",
        price: "",
        startDate: "",
        endDate: "",
      }
    }
  }
  componentDidMount() {
    // will be used when we create update function
  }

  createActivityMethod = (data) => {
    console.log("I am in createActivity Method");
    console.log("==========");
    console.log(data);
    console.log("==========");
    createActivity(this.props.match.params.id, data)
      .then((res) => {
        this.props.history.push(`/show-trip/${this.props.match.params.id}`)
        // this.setState({ ...this.state, trip: res.data })
        this.props.setTrips([...this.props.activity, data])
      }).catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    const state = this.state.activity // copy  the state trip
    state[e.target.id] = e.target.value // listen to the change and save it to the state att
    this.setState({
      activity: state // set trip to state which is the updated versionn in this case 
    });
    console.log(this.state.activity);
  };

  onSubmitCreateMethod = (e) => {
    e.preventDefault();
    this.createActivityMethod(this.state.activity)
  }
  render() {
    console.log(this.props.match.params.id);

    return (
      <React.Fragment>
        <form className="w-50 mx-auto card px-5 my-5">
          <div className="form-row">
            <section className="col-12 my-5">
              <h3>Create your activity</h3>
            </section>
            <section className="col-6">
              <input type="text" className="form-control" id="title" placeholder="title" value={this.state.activity.title} onChange={this.handleChange} />
            </section>
            <section className="col-6">
              <input type="text" className="form-control" id="category" placeholder="category" onChange={this.handleChange} value={this.state.activity.category} />
            </section>

            <section className="col-12">
              <input type="text" className="form-control" id="description" placeholder="description" onChange={this.handleChange} value={this.state.activity.description} />
            </section>
            <section className="col-12">
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                placeholder="address"
                name="address"
                value={this.state.activity.address}
                onChange={this.handleChange}
                required
              />
            </section>

            <section className="col-3">
              <input type="number" className="form-control" id="price" placeholder="price" onChange={this.handleChange} value={this.state.activity.price} />
            </section>
            <section className="col-9">
              <input type="text" className="form-control" id="image" placeholder="Image URL" onChange={this.handleChange} value={this.state.activity.image} />
            </section>



            <section className="col-6">
              <div className="form-group">
                <label for="startDate">Start Date</label>
                <input
                  type="Date"
                  className="form-control"
                  placeholder="Start Date"
                  id="startDate"
                  value={this.state.activity.startDate}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </section>
            <section className="col-6">
            <div className="form-group">
              <label for="endDate">End Date</label>
              <input
                type="Date"
                className="form-control"
                placeholder="End Date"
                id="endDate"
                value={this.state.activity.endDate}
                onChange={this.handleChange}
                required
              />
              </div>
            </section >
            <section className="col-12 my-5 text-center">
              <button type="submit" className="btn btn-green w-25" onClick={this.onSubmitCreateMethod}>Create</button>
            </section>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
export default withRouter(ActivityForm);
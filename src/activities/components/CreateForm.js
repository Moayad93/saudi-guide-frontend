import React, { Component } from 'react'
import { createActivity } from '../api';
import { Link, withRouter } from 'react-router-dom';
class CreateForm extends Component {
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
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="title" placeholder="title" value={this.state.activity.title} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="category" placeholder="category" onChange={this.handleChange} value={this.state.activity.category} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="description" placeholder="description" onChange={this.handleChange} value={this.state.activity.description} />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="number" className="form-control" id="price" placeholder="price" onChange={this.handleChange} value={this.state.activity.price} />
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" className="forsm-control" id="image" placeholder="Image URL" onChange={this.handleChange} value={this.state.activity.image} />
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationCustom05">Start Date</label>
                            <input
                                type="Date"
                                className="form-control"
                                placeholder="Start Date"
                                id="startDate"
                                value={this.state.activity.startDate}
                                onChange={this.handleChange}
                                required
                            />
                            <div className="invalid-feedback">Please provide a valid End Date.</div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="validationCustom05">End Date</label>
                            <input
                                type="Date"
                                className="form-control"
                                placeholder="End Date"
                                id="endDate"
                                value={this.state.activity.endDate}
                                onChange={this.handleChange}
                                required
                            />
                            <div className="invalid-feedback">Please provide a valid End Date.</div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmitCreateMethod}>Create Activity</button>
                </form>
            </React.Fragment>
        )
    }
}
export default withRouter(CreateForm);
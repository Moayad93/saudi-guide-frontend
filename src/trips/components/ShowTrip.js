import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { showTrip } from "../api";

class ShowTrip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trip: {}
        }
    }

    showTripMethod() {
        console.log("I am in");
        showTrip(this.props.match.params.id)
            .then((res) => {
                // console.log(res.data.trip);
                this.setState({
                    trip: res.data.trip
                })
            }).catch((err) => {
            });
    };

    componentDidMount() {
        this.showTripMethod()
    }

    render() {
        const activities = this.state.trip.activities.map(activity => {
            return <p>activity.title</p>
        });
        console.log(this.state.trip.activities);
        return (
            <React.Fragment>
                <h1>{this.state.trip.title} </h1>
                <h2>{this.state.trip.description}</h2>
                {activities}
            </React.Fragment>
        )
    }
}

export default withRouter(ShowTrip);

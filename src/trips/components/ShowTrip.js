import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { showTrip } from "../api";
import CreateActivity from "../../activities/components/CreateActivity";

class ShowTrip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trip: {
                title: "",
                description: "",
                activities: [],
                includedInTrip: [{

                }],
                whatToBring: [{

                }],
                startDate: "",
                endDate: "",
                recommendation: "",
                guide: "", // add your user id in this feild. this is my user
                city: "",
                address: "",
            }
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
        let allActivities = <h2> No Activity </h2>
        if (this.state.trip.activities.length > 0) {
            allActivities = this.state.trip.activities.map(activity => {
                return (<li key={activity._id}>{activity.title}</li>)
            });
        }
        console.log(this.state.trip);
        //====  this is a werid way to find your state.. Need to be discussed tmr with you guys
        // console.log(allActivities._self.state.trip.activities); 

        return (
            <React.Fragment>
                <h1> title : {this.state.trip.title} </h1>
                <h2> Description: {this.state.trip.description}</h2>
                <h2> city: {this.state.trip.city}</h2>
                <h4>start Date: {this.state.trip.startDate}</h4>
                <h4>end Date: {this.state.trip.endDate}</h4>
                <ul>
                    {allActivities}
                </ul>
                <CreateActivity id={this.props.match.params.id} />
            </React.Fragment>
        )
    }
}

export default withRouter(ShowTrip);

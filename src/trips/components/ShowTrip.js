import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { showTrip } from "../api";
import CreateActivity from "../../activities/components/CreateActivity";
import DeleteActivity from "../../activities/components/DeleteActivity";

class ShowTrip extends Component {
    constructor(props) {
        super(props)

        this.state = {
            trip: {
                title: "",
                description: "",
                image:"",
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

    showTripMethod = () => {
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
        console.log("=============");
        console.log(this.props.trips);
        
        let allActivities;
        if (this.state.trip.activities.length > 0) {
            allActivities = this.state.trip.activities.map((activity, index) => {
                return (
                    <div key={index}>
                    <li >{activity.title}</li>
                        <DeleteActivity showTripMethod={this.showTripMethod} id={activity._id} setTrips= {this.props.setTrips}/>
                    </div>
                )

            });
        }else {
            allActivities = <h2> No Activity </h2>
        }
        console.log(this.state.trip);
        //====  this is a werid way to find your state.. Need to be discussed tmr with you guys
        // console.log(allActivities._self.state.trip.activities); 

        return (
            <React.Fragment>
                <h1> title : {this.state.trip.title} </h1>
                <h2> Description: {this.state.trip.description}</h2>
                <h4>start Date: {this.state.trip.startDate}</h4>
                <h4>end Date: {this.state.trip.endDate}</h4>
                <img src={this.state.trip.image} alt="ffff" />
                <ul>
                    {allActivities}
                </ul>
                <CreateActivity id={this.props.match.params.id} />
            </React.Fragment>
        )
    }
}

export default withRouter(ShowTrip);

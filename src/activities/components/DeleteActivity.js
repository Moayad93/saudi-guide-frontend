import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { deleteActivity } from '../api';
import { allTrips } from '../../trips/api';
const DeleteActivity = (props) => {
    console.log(props);

    const deleteActivityMethod = () => {
        // console.log(props.trip.activities);
        console.log(props.id);
        console.log(props.match.params.id);

        deleteActivity(props.match.params.id, props.id)
            .then(() => {
                return allTrips()
                    .then((res) => {
                        console.log(res.data);
                        props.setTrips(res.data.trips)
                    })
                    .then(() => props.showTripMethod())

                    .catch(er => console.log(er)
                    )
                // let newTripList = props.trips.activities.filter(activity => {
                //     return activity._id !== props.id;
                // });
                // props.setTrips(newTripList);
            })
            .catch(error => {
                console.log(error);
            });
    };
    console.log([props]);

    return (
        <React.Fragment>
            <Link className="btn btn-danger" to="#" onClick={deleteActivityMethod}>
                Delete this activity
        </Link>
        </React.Fragment>
    )
}

export default withRouter(DeleteActivity)

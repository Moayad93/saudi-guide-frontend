import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import ActivityForm from './ActivityForm'
const CreateActivity = (props) => {
    return (
        <React.Fragment>
            <Link
                to={`/show-trip/${props.id}/activity-form`}
                render={() => <ActivityForm />}
                className="btn btn-primary"
            >
                Create activity
        </Link>
        </React.Fragment>
    )
}
export default withRouter(CreateActivity);

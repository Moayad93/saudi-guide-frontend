// // import React, { Component } from "react";
// // import { withRouter } from "react-router-dom";
// // import { showTrip } from "../api";

// // class ShowTrip extends Component {
// //   constructor(props) {
// //     super(props)

// //     this.state = {
// //     }
// //   }

// //   render() {
// //     console.log(this.props.trips);
// //     return (
// //       <React.Fragment>
// //         <center>
// //           <h1>Trip Info</h1>
// //         </center>
// //         <h2>{this.props.trips.id(this.props.id).title}</h2>
// //       </React.Fragment>
// //     );
// //   }
// // }

// // export default withRouter(ShowTrip);

// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import { showTrip } from "../api";

// const ShowTrip = props => {
//   showTripMethod = () => {
//     console.log(props.id);

//     showTrip(props.id)
//       .then(res => {
//         const newTripList = this.props.trips.filter(trip => {
//           return trip._id !== this.props.id;
//         });
//         props.setTrips(newTripList);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   console.log(props);
//   return (
//     <React.Fragment>
//       <center>
//         <h1>Trip Info</h1>
//       </center>
//       <h2>{props.trips.id(props.id).title}</h2>
//     </React.Fragment>
//   );
// };

// export default withRouter(ShowTrip);

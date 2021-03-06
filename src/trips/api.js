import apiUrl from "../apiConfig";
import axios from "axios";

// Get All Trips
export const allTrips = () => {
  return axios({
    method: "GET",
    url: `${apiUrl}/trips`
    // headers: {
    //   Authorization: `Bearer ${user.token}` // FOR EXPRESS
    // }
  });
};

// Create a Trip
export const createTrip = trip => {
  console.log(trip);
  return axios({
    method: "POST",
    url: `${apiUrl}/trips`,
    data: {
      trip
    }
  });
};

// Show a Trip
export const showTrip = id => {
  return axios({
    method: "GET",
    url: `${apiUrl}/trips/${id}`
    // headers: {
    //   Authorization: `Bearer ${user.token}` // FOR EXPRESS
    // }
  });
};

// Update a Trip
export const updateTrip = (id, trip) => {
  console.log("im in update trip call");
  
  return axios({
    method: "PATCH",
    url: `${apiUrl}/trips/${id}`,
    data: {
      trip
    }
    // headers: {
    //   Authorization: `Bearer ${user.token}` // FOR EXPRESS
    // }
  });
};

// Delete a Trip
export const deleteTrip = id => {
  return axios({
    method: "DELETE",
    url: `${apiUrl}/trips/${id}`
    // headers: {
    //   Authorization: `Bearer ${user.token}` // FOR EXPRESS
    // }
  });
};

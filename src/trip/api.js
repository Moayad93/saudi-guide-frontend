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
export const createTrip = (trip) => {
  return axios({
    method: "POST",
    url: `${apiUrl}/trips`,
    data: {
      trip
    }
  });
}
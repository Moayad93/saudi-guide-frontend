import apiUrl from "../apiConfig";
import axios from "axios";

export const allTrips = () => {
  return axios({
    method: "GET",
    url: apiUrl + "/trips",
    // headers: {
    //   Authorization: `Bearer ${user.token}` // FOR EXPRESS
    // }
  });
}
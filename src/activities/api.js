import apiUrl from "../apiConfig";
import axios from "axios";

// Create a activity
export const createActivity = (id, activity) => {
    console.log(activity);
    console.log(id);
    return axios({
        method: "POST",
        url: `${apiUrl}/trips/${id}/activities`,
        data: {
            activity
        }
    });
};


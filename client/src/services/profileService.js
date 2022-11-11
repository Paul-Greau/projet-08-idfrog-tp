import { sendGetRequest } from "../lib/Axios";


export const getProfile = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

   return sendGetRequest(`/profile`, config)

}

  


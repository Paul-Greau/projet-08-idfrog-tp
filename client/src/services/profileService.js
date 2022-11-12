// import { sendPostRequest } from "../lib/Axios";
import { sendGetRequest, sendPatchRequest, sendPostRequest } from "../lib/Axios";



export const getProfile = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
   // console.log(token);   
   return sendGetRequest(`/profile`, config)
}

export const postFIllProfile = async (token, data) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
   // console.log(token);   
   return sendPostRequest(`/profile/details`, config, data)
}

export const patchProfile = async (token, data) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
   // console.log(token);   
   return sendPatchRequest(`/profile/details`, config, data)
}



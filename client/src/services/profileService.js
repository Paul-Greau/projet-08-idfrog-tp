// import { sendPostRequest } from "../lib/Axios";
import { sendGetRequest } from "../lib/Axios";



export const getProfile = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

   // console.log(token);
   
   return sendGetRequest(`/profile`, config)

}

  


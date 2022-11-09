import { sendPostRequest } from "../lib/Axios";

export const postLogin = async (data) => {
    console.log(data);
   
   return sendPostRequest(`/login`, data);

  };

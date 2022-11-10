import { sendPostRequest } from "../lib/Axios";
import { sendGetRequest } from "../lib/Axios";

export const postLogin = async (data) => {
  console.log(data);   
  return sendPostRequest(`/login`, data);
  };

export const getLogout = async () => {     
  return sendGetRequest(`/logout`);
  };

export const postSignin = async (data) => {
    console.log(data);
   
   return sendPostRequest(`/subscribe`, data);

  };

export const getLogout = async () => {     
    return sendGetRequest(`/logout`);
    };
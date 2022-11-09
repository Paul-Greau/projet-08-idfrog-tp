import { sendPostRequest } from "../lib/Axios";
// import axios from "axios"

export const postLogin = async (data) => {
    console.log(data);
   
   // let res = await axios.post('http://localhost:3001/login', data);
    return sendPostRequest(`/login`, data);
    
    
    //console.log('res dans login', res.data);

  };


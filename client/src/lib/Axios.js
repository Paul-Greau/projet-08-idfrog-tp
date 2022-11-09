import { default as Axios } from "axios";

const axios = Axios.create({
  baseURL:  "http://localhost:3001",
  timeout: 10000,
  headers: {
    // 'CSRF-Token': csrfToken
  }
});

export const sendGetRequest = (url, params = {}, headers = {}) => {
  return axios.get(url, 
    headers,
    params,
  );
};

export const sendPostRequest = async (url, params = {}, headers = {}, ) => {
 try{
  let response =  await axios.post(url, 
    params,
    headers,   
  )
    console.log('res axios', response);
    return (response)
  }
  catch (error){
    console.log(error);
    return (error.response)
  } 

};

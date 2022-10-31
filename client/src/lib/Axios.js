import { default as Axios } from "Axios";

const axios = Axios.create({
  baseURL:  "https://...",
  timeout: 10000,
  headers: {
    // 'CSRF-Token': csrfToken
  }
});

const sendGetRequest = (url, params = {}, headers = {}) => {
  return axios.get(url, {
    headers,
    params,
  });
};

export { sendGetRequest };
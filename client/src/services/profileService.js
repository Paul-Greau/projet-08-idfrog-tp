import { sendGetRequest } from "../lib/Axios";

const getLogin = () => {
  return sendGetRequest('/login');
  
};
const isLogged = () => {
    return sendGetRequest('/profile');
}

export {getLogin, isLogged};
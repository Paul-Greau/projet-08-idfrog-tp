import { sendGetRequest } from "../lib/Axios";

export const getProjectsList = () => {
  console.log('dans la req axios');
  return sendGetRequest(`/project/list`);
};





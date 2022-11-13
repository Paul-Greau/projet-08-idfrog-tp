import { sendGetRequest, sendPostRequest } from "../lib/Axios";



export const getProjectsList = () => {
  console.log('dans la req axios');
  return sendGetRequest(`/project/list`);
};

export const getProjectById = (id) => {
  console.log('dans la req axios');
  return sendGetRequest(`/project/${id}`);
};

export const postProject = async (token, data) => {
  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
 return sendPostRequest(`/profile/project/create`, config, data)
}
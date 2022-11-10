import { sendGetRequest } from "../lib/Axios";
// import { sendPostRequest } from "../lib/Axios";

export const getProjectsList = () => {
  console.log('dans la req axios getProjectsList');
  return sendGetRequest(`/project/list`);
};

export const getProjectById = (id) => {
  console.log('dans la req axios getProjectById');
  return sendGetRequest(`/project/${id}`);
};


export const getProfileById = (id) => {
  console.log('dans la req axiosgetProfile', id);
 
 return sendGetRequest(`/profile/${id}`
  );

};
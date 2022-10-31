import { sendGetRequest } from "../lib/Axios";

const getProjectById = (projectId) => {
  return sendGetRequest(`posts/${projectId}`);
};

export { getProjectById };
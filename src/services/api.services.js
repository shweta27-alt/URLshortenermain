import axios from "axios";
const getHeader = () => {
  return {
    headers: { "Content-Type": "application/json" },
  };
};

const getUrl = () => {
  return "http://localhost:5080";
};

// api service to contain all api
const apiService = {
  login(data) {
    return axios.post(getUrl() + "/authentication/login", data, { withCredentials: true }, getHeader());
  },
  register(data) {
    return axios.post( getUrl() + "/authentication/register/form", data, { withCredentials: true }, getHeader() );
  },

  logout() {
    return axios.post(getUrl() + "/authentication/logout",{},{ withCredentials: true }, getHeader());
  },
};

export default apiService;

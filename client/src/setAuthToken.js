import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //apply header to all request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //delete header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;

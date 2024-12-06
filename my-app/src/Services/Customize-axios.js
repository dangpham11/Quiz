import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:7108/api",
});

instance.interceptors.response.use(
  (response) => {
    return response ? response : { statusCode: response.status };
  },
  (error) => {
    let res = {};
    if (error.response) {
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    return res;
  }
);

export default instance;

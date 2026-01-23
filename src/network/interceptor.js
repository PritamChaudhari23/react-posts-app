import axios from "axios";

export const requestHandler = (request) => {
  return request;
};

export const successHandler = (response) => {
  return response;
};

export const errorHandler = (error) => {
  const errorMessage = "Something went wrong: ";
  return Promise.reject({ ...error, message: errorMessage });
};

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // or env-based URL
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;

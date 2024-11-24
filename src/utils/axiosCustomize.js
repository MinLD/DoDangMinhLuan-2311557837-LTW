import axios from "axios";
import nProgress from "nprogress";
    const instance = axios.create({
        baseURL: 'http://localhost:8080/',
      });
      // Add a request interceptor
instance.interceptors.request.use(function (config) {
  nProgress.start();
    // Do something before request is sent
    return config;
  }, function (error) {
  
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  nProgress.done();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data? response.data : response;
  }, function (error) {
     nProgress.done();
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let res = {};
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      res.data = error.response.data
      res.status= error.response.status
      res.headers=error.response.headers
      nProgress.done();
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser 
      // and an instance of http.ClientRequest in node.js
      nProgress.done();
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
      nProgress.done();
    }
    return res;
  });
export default instance;
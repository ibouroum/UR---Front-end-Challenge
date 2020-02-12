import axios from "axios";

 const request = (config, token)=> {

  const responsePromise = axios({
    ...config,
    "headers": {"Authorization": token},
  });
  return responsePromise;
};
export default request;
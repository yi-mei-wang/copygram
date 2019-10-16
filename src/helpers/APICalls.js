import axios from "axios";

const AUTH_TOKEN = localStorage.getItem("jwt");

axios.defaults.baseURL = "https://insta.nextacademy.com/api/v1";

const postUserData = async (url, credentials) => {
  const signal = axios.CancelToken.source();
  try {
    const {
      data: { auth_token, user }
    } = await axios.post(url, credentials, { cancelToken: signal.token });
    return { auth_token, user };
  } catch (err) {
    throw err;
  }
};

const getDataWithHeaders = (path, headers) => {
  headers = headers && {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`
    }
  };

  try {
    return axios.get(path, headers);
  } catch (err) {
    console.log(err);
  }
};

export { getDataWithHeaders, postUserData };

import axios from "axios";

const AUTH_TOKEN = localStorage.getItem("jwt");
axios.defaults.baseURL = "https://insta.nextacademy.com/api/v1";

const loginUserCall = async (url, credentials) => {
  const signal = axios.CancelToken.source();
  try {
    const {
      data: { auth_token, user }
    } = await axios.post(
      url,
      {
        username: credentials.username,
        password: credentials.password
      },
      { cancelToken: signal.token }
    );
    return { auth_token, user };
  } catch (err) {
    throw err;
  }
};

const getDataWithAuth = path => {
  try {
    return axios.get(path, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const getData = path => {
  try {
    return axios.get(path);
  } catch (err) {
    console.log(err);
  }
};

export { getData, getDataWithAuth, loginUserCall };

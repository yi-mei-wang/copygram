import axios from "axios";

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

const fetchAllUsers = async (url, cancelToken) => {
  try {
    const resp = await axios.get(url, { cancelToken });
    // Returns an array of user info
    return resp.data;
  } catch (err) {
    throw err;
  }
};

export { loginUserCall, fetchAllUsers };

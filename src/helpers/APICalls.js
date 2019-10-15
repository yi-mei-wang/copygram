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

// const fetchAllUsers = (url, cancelToken) => {
//   // return axios.get(url, { cancelToken });
//   try {
//     const resp = axios.get(url, { cancelToken });
//     // Returns an array of user info
//     return resp;
//   } catch (err) {
//     throw err;
//   }
// };

// const fetchUserImages = (url, headers) => {
//   try {
//     const resp = axios.get(url, { headers });
//     console.log(resp);
//     return resp;
//   } catch (err) {
//     console.log(err);
//   }
// };

// export { loginUserCall, fetchAllUsers, fetchUserImages };

const getDataWithAuth = path => {
  let data;
  try {
    data = axios.get(path, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

const getData = path => {
  let data;
  try {
    data = axios.get(path);
    console.log(axios);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getData, getDataWithAuth, loginUserCall };

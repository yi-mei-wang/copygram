import axios from "axios";

const loginUserCall = async (url, credentials) => {
  try {
    const {
      data: { auth_token, user }
    } = await axios.post(url, {
      username: credentials.username,
      password: credentials.password
    });
    return { auth_token, user };
  } catch (err) {
    throw err;
  }
};

export { loginUserCall };

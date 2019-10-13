import axios from "axios";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ButtonWithLoader } from "../styled/ButtonWithLoader";

export const LoginForm = ({ setCurrentUser, history }) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [userInputs, setUserInputs] = useState("");
  const [errors, setErrors] = useState(false);
  const signal = axios.CancelToken.source();

  const handleChange = name => e => {
    setUserInputs({ ...userInputs, [name]: e.target.value });
  };

  const handleError = name => {
    setErrors({ ...errors, [name]: true });
  };

  const loginUser = () => {
    // validate user input
    axios
      .post(
        "https://insta.nextacademy.com/api/v1/login",
        {
          username: userInputs.username,
          password: userInputs.password
        },
        {
          cancelToken: signal.token
        }
      )
      .then(resp => {
        const { auth_token, user } = resp.data;
        localStorage.setItem("jwt", auth_token);
        setCurrentUser(user);
        // setIsButtonLoading(false);
        history.push({
          pathname: "/"
        });
      })
      .catch(err => {
        console.log(err);
        if (axios.isCancel(err)) {
          console.log("post Request canceled");
        }
        setIsButtonLoading(false);
        handleError("password");
      });
  };

  const useStyles = makeStyles(theme => ({
    input: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  return (
    <div
      className="d-flex flex-column w-50 mx-auto"
      style={{ border: "1px solid #eee", padding: "10px" }}
    >
      <TextField
        className={classes.input}
        label="Name"
        value={userInputs.username}
        onChange={handleChange("username")}
        margin="normal"
      />

      <TextField
        error={Boolean(errors.password)}
        className={classes.input}
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        onChange={handleChange("password")}
        value={userInputs.password}
      />

      <div className="mx-auto">
        <ButtonWithLoader
          isLoading={isButtonLoading}
          onClick={() => {
            setIsButtonLoading(true);
            loginUser();
          }}
          disabled={
            !userInputs
              ? true
              : (!userInputs.username || !userInputs.password) && true
          }
          className="m-auto"
        >
          Login
        </ButtonWithLoader>
      </div>
    </div>
  );
};

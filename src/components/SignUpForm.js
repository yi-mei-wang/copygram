import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ButtonWithLoader } from "../styled/ButtonWithLoader";
import { postUserData } from "../helpers/APICalls";
import { APIUrls } from "../constants/APIUrls";

export const SignUpForm = ({ setCurrentUser, history, match }) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [userInputs, setUserInputs] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState(false);
  const path = useRef(APIUrls[match.url.replace("/", "")]);

  console.log(typeof match.url);

  const handleChange = name => e => {
    setUserInputs({ ...userInputs, [name]: e.target.value });
  };

  const handleError = name => {
    setErrors({ ...errors, [name]: true });
  };

  const postData = async () => {
    // validate user input

    try {
      const { auth_token, user } = await postUserData(path, userInputs);

      localStorage.setItem("jwt", auth_token);

      setCurrentUser(user);

      history.push({
        pathname: "/"
      });
    } catch (err) {
      console.log(err);
      setIsButtonLoading(false);
      handleError("password");
    }
  };

  const useStyles = makeStyles(theme => ({
    input: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  return (
    <div
      className="d-flex flex-column w-50 mx-auto my-3"
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

      {path === "signup" && (
        <TextField
          className={classes.input}
          label="email"
          type="email"
          value={userInputs.email}
          onChange={handleChange("email")}
          margin="normal"
        />
      )}

      <div className="mx-auto">
        <ButtonWithLoader
          isLoading={isButtonLoading}
          onClick={() => {
            setIsButtonLoading(true);
            postData();
          }}
          disabled={
            !userInputs
              ? true
              : (!userInputs.username || !userInputs.password) && true
          }
          className="m-auto"
        >
          Sign Up
        </ButtonWithLoader>
      </div>
    </div>
  );
};

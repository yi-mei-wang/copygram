import axios from "axios";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ButtonWithLoader } from "../styled/ButtonWithLoader";

export const LoginForm = ({ setCurrentUser }) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [userInputs, setUserInputs] = useState("");

  const loginUser = () => {
    // validate user input
    axios
      .post("https://insta.nextacademy.com/api/v1/login", {
        username: userInputs.username,
        password: userInputs.password
      })
      .then(result => {
        const { auth_token, user } = result.data;
        localStorage.setItem("jwt", auth_token);
        setCurrentUser(user);
        setIsButtonLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsButtonLoading(false);
      });
  };

  const handleChange = name => e => {
    setUserInputs({ ...userInputs, [name]: e.target.value });
  };

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();

  return (
    <div className="d-flex flex-column w-50">
      <TextField
        className={classes.button}
        label="Name"
        value={userInputs.username}
        onChange={handleChange("username")}
        margin="normal"
        variant="outlined"
      />

      <TextField
        className={classes.button}
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={handleChange("password")}
        value={userInputs.password}
      />

      <div>
        <ButtonWithLoader
          isLoading={isButtonLoading}
          onClick={() => {
            setIsButtonLoading(true);
            loginUser();
          }}
          // disabled={
          //   !userInputs
          //     ? true
          //     : userInputs.username.length < 6 ||
          //       (userInputs.password.length < 6 && true)
          // }
        >
          Login
        </ButtonWithLoader>
      </div>
    </div>
  );
};

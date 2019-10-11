import axios from "axios";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Loader as Icon } from "../styled/Loader";
import { ButtonWithLoader } from "../styled/ButtonWithLoader";

export const LoginForm = ({ setCurrentUser }) => {
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  const [loadingSpeed, setLoadingSpeed] = React.useState(1);

  React.useEffect(() => {
    if (isButtonLoading) {
      setTimeout(() => {
        setIsButtonLoading(false);
      }, 1000 / loadingSpeed);
    }
  }, [isButtonLoading, loadingSpeed]);

  const [userInputs, setUserInputs] = useState("");

  const loginUser = () => {
    // validate user input
    axios
      .post("https://insta.nextacademy.com/api/v1/login", {
        username: userInputs.username,
        password: userInputs.password
      })
      .then(result => {
        console.log(result.data);
        const { auth_token, user } = result.data;
        localStorage.setItem("jwt", auth_token);
        setCurrentUser(user);
      })
      .catch(err => console.log(err));
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
    <>
      <button
        onClick={() => {
          loginUser();
        }}
      >
        Login
      </button>

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

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={
          <Icon fill="#dede" width="30px" height="30px">
            send
          </Icon>
        }
      >
        Send
      </Button>

      <ButtonWithLoader
        isLoading={isButtonLoading}
        onClick={() => setIsButtonLoading(true)}
      >
        Login
      </ButtonWithLoader>
    </>
  );
};

import React from "react";
import { Redirect } from "react-router-dom";
import { getThemeProps } from "@material-ui/styles";

export const LogoutPage = ({ userStore }) => {
  localStorage.removeItem("jwt");
  userStore.setCurrentUser(null);
  return (
    <Redirect
      to={{ pathname: "/login", state: { from: getThemeProps.location } }}
    />
  );
};

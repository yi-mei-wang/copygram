import React from "react";
import { Redirect } from "react-router-dom";
import { getThemeProps } from "@material-ui/styles";

export const LogoutPage = () => {
  localStorage.removeItem("jwt");
  return (
    <Redirect
      to={{ pathname: "/login", state: { from: getThemeProps.location } }}
    />
  );
};

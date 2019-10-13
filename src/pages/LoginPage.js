import React from "react";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = ({ setCurrentUser, ...props }) => (
  <div style={{ margin: "auto" }}>
    <LoginForm setCurrentUser={setCurrentUser} {...props} />
  </div>
);

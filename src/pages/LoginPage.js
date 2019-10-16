import React from "react";
import { LoginForm } from "../components/LoginForm";
import { SignUpForm } from "../components/SignUpForm";

export const LoginPage = ({ setCurrentUser, ...props }) => (
  <div style={{ margin: "auto" }}>
    {/* <LoginForm setCurrentUser={setCurrentUser} {...props} /> */}
    <SignUpForm setCurrentUser={setCurrentUser} {...props} />
  </div>
);

import React from "react";
import { UserForm } from "../components/UserForm";

export const LoginPage = ({ setCurrentUser, ...props }) => (
  <div style={{ margin: "auto" }}>
    {/* <LoginForm setCurrentUser={setCurrentUser} {...props} /> */}
    <UserForm setCurrentUser={setCurrentUser} {...props} />
  </div>
);

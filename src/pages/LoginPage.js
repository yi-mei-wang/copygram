import React from "react";
import { UserForm } from "../components/UserForm";

export const LoginPage = ({ setCurrentUser, ...props }) => (
  <div style={{ margin: "auto" }}>
    <UserForm setCurrentUser={setCurrentUser} {...props} />
  </div>
);

import React from "react";
import { Loader } from "../styled/Loader";
import { RoundImage as ProfileImage } from "../styled/RoundImage";

export const Homepage = ({ users, isLoading }) => {
  return isLoading ? (
    <Loader alt="loader" fill="yellow" width="125px" height="125px" />
  ) : (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.id}: {user.username}
          <ProfileImage
            src={user.profileImage}
            width={"180px"}
            height={"180px"}
            alt="User avatar"
          />
        </li>
      ))}
    </ul>
  );
};

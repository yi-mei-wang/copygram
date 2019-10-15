import React from "react";
import { RoundImage as ProfileImage } from "../styled/RoundImage";

export const Homepage = ({ users }) => {
  return (
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

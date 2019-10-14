import React from "react";
import { RoundImage } from "../styled/RoundImage";

export const UserProfileCard = ({ username, profileImage }) => (
  <div>
    <RoundImage
      src={profileImage}
      alt="Profile avatar"
      width="200px"
      height="200px"
    />
    <h2>{username}</h2>
  </div>
);

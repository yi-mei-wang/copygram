import React from "react";
import { GracefulImage as ProfileImage } from "../styled/GracefulImage";

export const UserProfileCard = ({ username, profileImage }) => (
  <div>
    <ProfileImage
      src={profileImage}
      alt="Profile avatar"
      width="200px"
      height="200px"
      round={1}
    />
    <h2>{username}</h2>
  </div>
);

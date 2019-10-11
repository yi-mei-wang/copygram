import React from "react";

export const UserProfileCard = ({ username, profileImage }) => (
  <div>
    <img src={profileImage} alt="Profile avatar" />
    <h2>{username}</h2>
  </div>
);

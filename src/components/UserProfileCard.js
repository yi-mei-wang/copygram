import React from "react";
import { Link } from "react-router-dom";
import { GracefulImage as ProfileImage } from "../styled/GracefulImage";

export const UserProfileCard = ({ username, profileImage, id }) => (
  <Link to={`/users/${id}`}>
    <div className="d-flex align-items-center flex-column my-5 justify-content-center">
      <ProfileImage
        src={profileImage}
        alt="Profile avatar"
        width="200px"
        height="200px"
        round={1}
      />
      <h2>{`Hi, I am ${username}`}</h2>
    </div>
  </Link>
);

import React, { useState, useEffect } from "react";
import { APIUrls } from "../constants/APIUrls";
import { getDataWithHeaders } from "../helpers/APICalls";
import { UserProfileCard } from "../components/UserProfileCard";
import { UserImages } from "../components/UserImages";

export const UserProfilePage = ({ match, setIsLoading }) => {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const id = match.params.id;

  useEffect(() => {
    let withHeaders = id === "me";

    let key = id === "me" ? "profile_picture" : "profileImage";

    let path = `${APIUrls.userInfo}${id}`;

    const getUserInfo = async () => {
      const resp = await getDataWithHeaders(path, withHeaders);
      setUsername(resp.data.username);
      setProfileImage(resp.data[key]);
      setIsLoading();
    };

    getUserInfo();
  }, [setIsLoading, id]);

  return (
    <>
      <UserProfileCard
        username={username}
        profileImage={profileImage}
        id={id}
      />
      <div className="d-flex justify-content-center">
        <UserImages id={id} />
      </div>
    </>
  );
};

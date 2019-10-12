import axios from "axios";
import React, { useState, useEffect } from "react";
import { Loader } from "./styled/Loader";
import { RoundImage as ProfileImage } from "./styled/RoundImage";

export const Homepage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Gets called after initial render and only gets called ONCE
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(results => {
        console.log(results);
        setUsers(results.data.slice(0, 10));
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  });
  return isLoading ? (
    <Loader alt="loader" fill="yellow" width="125px" height="125px" />
  ) : (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.id}: {user.username}
          <ProfileImage
            imgUrl={user.profileImage}
            name={user.username}
            width={"180px"}
            height={"180px"}
          />
        </li>
      ))}
    </ul>
  );
};

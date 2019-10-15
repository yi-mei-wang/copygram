import React, { useEffect, useState } from "react";
import { GracefulImage as ProfileImage } from "../styled/GracefulImage";
import { getDataWithHeaders } from "../helpers/APICalls";
import { APIUrls } from "../constants/APIUrls";

export const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await getDataWithHeaders(APIUrls.allUsers);
      setUsers(resp.data);
    };

    fetchUsers();
  }, []);

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
            round={1}
          />
        </li>
      ))}
    </ul>
  );
};

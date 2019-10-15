import React, { useEffect, useState } from "react";
import { RoundImage as ProfileImage } from "../styled/RoundImage";
import { getData } from "../helpers/APICalls";

export const Homepage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await getData("/users");
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
          />
        </li>
      ))}
    </ul>
  );
};

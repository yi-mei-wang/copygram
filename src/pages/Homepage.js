import React, { useEffect, useState } from "react";
import { UserProfileCard } from "../components/UserProfileCard";
import { getDataWithHeaders } from "../helpers/APICalls";
import { APIUrls } from "../constants/APIUrls";

export const Homepage = ({ setLoading }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await getDataWithHeaders(APIUrls.allUsers);
      setUsers(resp.data);
      setLoading();
    };

    fetchUsers();
  }, [setLoading]);

  return (
    <div>
      {users.map((user, index) => (
        <UserProfileCard
          username={user.username}
          profileImage={user.profileImage}
          id={user.id}
          key={index}
        />
      ))}
    </div>
  );
};

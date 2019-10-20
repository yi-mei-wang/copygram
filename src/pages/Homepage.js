import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStores from "../hooks/useStores";
import { UserProfileCard } from "../components/UserProfileCard";
import { getDataWithHeaders } from "../helpers/APICalls";
import { APIUrls } from "../constants/APIUrls";

export const Homepage = observer(props => {
  const [users, setUsers] = useState([]);

  const store = useStores();
  console.log(store.rootStore);
  console.log(store.rootStore.loadingStore);

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await getDataWithHeaders(APIUrls.allUsers);
      setUsers(resp.data);
      store.rootStore.loadingStore.setIsLoading();
    };

    fetchUsers();
  }, [store.rootStore.loadingStore]);

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
});

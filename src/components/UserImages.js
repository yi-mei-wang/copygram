import React, { useState, useEffect } from "react";
import { getDataWithAuth } from "../helpers/APICalls";
import { GracefulImage } from "../styled/GracefulImage";

export const UserImages = ({ id }) => {
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    let params = id === "me" ? "/me" : `?userId=${id}`;
    const fetchData = async () => {
      const resp = await getDataWithAuth(`/images${params}`);
      setImgUrls(resp.data);
    };
    fetchData();
  }, [id]);

  return imgUrls.map((url, index) => (
    <GracefulImage
      src={url}
      width="250px"
      height="250px"
      key={index}
      alt="User posts"
      round={0}
    />
  ));
};

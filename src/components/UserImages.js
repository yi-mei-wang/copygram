import React, { useState, useEffect } from "react";
import { getDataWithAuth } from "../helpers/APICalls";
import { GracefulImage } from "../styled/GracefulImage";

export const UserImages = () => {
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDataWithAuth("/images/me");
      setImgUrls(resp.data);
    };
    fetchData();
  }, []);

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

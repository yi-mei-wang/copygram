import React, { useState, useEffect } from "react";
import { getDataWithHeaders } from "../helpers/APICalls";
import { APIUrls } from "../constants/APIUrls";
import { GracefulImage } from "../styled/GracefulImage";

export const UserImages = ({ id }) => {
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    let path = id === "me" ? APIUrls.myImages : `${APIUrls.userImages}${id}`;

    let headers = id === "me";

    const fetchData = async () => {
      const resp = await getDataWithHeaders(path, headers);
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

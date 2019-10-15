import React, { useState, useEffect } from "react";
import { getDataWithAuth } from "../helpers/APICalls";
import { RoundImage } from "../styled/RoundImage";

export const UserImages = () => {
  const [imgUrls, setImgUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getDataWithAuth("/images/me");
      setImgUrls(resp.data);
    };
    fetchData();
  }, []);

  return imgUrls.map(url => (
    <RoundImage src={url} width="250px" height="250px" />
  ));
};

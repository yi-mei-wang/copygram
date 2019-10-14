import React, { useState, useEffect } from "react";
import { getData } from "../helpers/APICalls";
import { RoundImage } from "../styled/RoundImage";

export const UserImages = () => {
  const [imgUrls, setImgUrls] = useState([]);

  // try {
  //   const resp = await fetchUserImages(
  //     "https://insta.nextacademy.com/api/v1/images/me",
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("jwt")}`
  //       }
  //     }
  //   );
  //   console.log(resp.data);
  //   // setImgUrls(resp.data);
  //   console.log(imgUrls);
  //   return <h1>asdf</h1>;
  // } catch (err) {
  //   console.log(err);
  // }
  useEffect(() => {
    const fetchData = async () => {
      const resp = await getData(
        "https://insta.nextacademy.com/api/v1/images/me",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          }
        }
      );
      setImgUrls(resp.data);
    };
    fetchData();
  }, []);

  return imgUrls.map(url => (
    <RoundImage src={url} width="250px" height="250px" />
  ));
};

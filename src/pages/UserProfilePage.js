import axios from "axios";
import React from "react";
import { RoundImage } from "../styled/RoundImage";
import { UserProfileCard } from "../components/UserProfileCard";

export class UserProfilePage extends React.Component {
  state = {
    imgUrls: [],
    username: null,
    profileImage: null
  };

  componentDidMount() {
    axios
      .get("https://insta.nextacademy.com/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      })
      .then(resp => {
        console.log(resp);
        this.setState({
          // imgUrls: [...resp.data]
          username: resp.data.username,
          profileImage: resp.data.profile_picture
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { imgUrls, username, profileImage } = this.state;
    return (
      <>
        <UserProfileCard username={username} profileImage={profileImage} />

        {imgUrls.map((url, index) => (
          <RoundImage
            src={url}
            width="100px"
            height="100px"
            key={index}
            alt="User posts"
          />
        ))}
      </>
    );
  }
}

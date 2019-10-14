import React from "react";
import { RoundImage } from "../styled/RoundImage";
import { UserProfileCard } from "../components/UserProfileCard";
import { fetchUserImages } from "../helpers/APICalls";

export class UserProfilePage extends React.Component {
  state = {
    imgUrls: [],
    username: null,
    profileImage: null
  };

  async componentDidMount() {
    try {
      const resp = await fetchUserImages(
        "https://insta.nextacademy.com/api/v1/users/me",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          }
        }
      );
      this.setState({
        username: resp.data.username,
        profileImage: resp.data.profile_picture
      });
    } catch (err) {
      console.log(err);
    }
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

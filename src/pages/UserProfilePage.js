import React from "react";
import { RoundImage } from "../styled/RoundImage";
import { UserProfileCard } from "../components/UserProfileCard";
import { getDataWithAuth } from "../helpers/APICalls";
import { UserImages } from "../components/UserImages";

export class UserProfilePage extends React.Component {
  state = {
    imgUrls: [],
    username: null,
    profileImage: null
  };

  async componentDidMount() {
    try {
      const resp = await getDataWithAuth("/users/me");

      this.setState({
        username: resp.data.username,
        profileImage: resp.data.profile_picture
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { username, profileImage } = this.state;
    console.log(username, profileImage);
    return (
      <>
        <UserProfileCard username={username} profileImage={profileImage} />
        <UserImages />
      </>
    );
  }
}

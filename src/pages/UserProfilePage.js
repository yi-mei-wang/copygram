import React from "react";
import { RoundImage } from "../styled/GracefulImage";
import { UserProfileCard } from "../components/UserProfileCard";
import { getDataWithHeaders } from "../helpers/APICalls";
import { UserImages } from "../components/UserImages";
import { APIUrls } from "../constants/APIUrls";

export class UserProfilePage extends React.Component {
  state = {
    imgUrls: [],
    username: null,
    profileImage: null
  };
  id = this.props.match.params.id;

  async componentDidMount() {
    let headers = this.id === "me";

    let key = this.id === "me" ? "profile_picture" : "profileImage";

    try {
      const resp = await getDataWithHeaders(
        `${APIUrls.userInfo}${this.id}`,
        headers
      );
      console.log(resp.data.profile_picture);
      this.setState({
        username: resp.data.username,
        profileImage: resp.data[key]
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { username, profileImage } = this.state;
    return (
      <>
        <UserProfileCard username={username} profileImage={profileImage} />
        <UserImages id={this.id} />
      </>
    );
  }
}

import React from "react";
import { UserProfileCard } from "../components/UserProfileCard";
import { getDataWithHeaders } from "../helpers/APICalls";
import { UserImages } from "../components/UserImages";
import { APIUrls } from "../constants/APIUrls";

export class UserProfilePage extends React.Component {
  state = {
    imgUrls: [],
    username: "",
    profileImage: null
  };

  id = this.props.match.params.id;

  async componentDidMount() {
    let headers = this.id === "me";

    let key = this.id === "me" ? "profile_picture" : "profileImage";

    let path = `${APIUrls.userInfo}${this.id}`;

    try {
      const resp = await getDataWithHeaders(path, headers);

      this.setState({
        username: resp.data.username,
        profileImage: resp.data[key]
      });

      this.props.setLoading();
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { username, profileImage } = this.state;
    return (
      <>
        <UserProfileCard
          username={username}
          profileImage={profileImage}
          id={this.id}
        />
        <div className="d-flex justify-content-center">
          <UserImages id={this.id} />
        </div>
      </>
    );
  }
}

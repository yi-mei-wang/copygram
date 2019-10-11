import axios from "axios";
import React from "react";
import { RoundImage } from "../styled/RoundImage";
import { UserProfileCard } from "../components/UserProfileCard";

export class UserProfilePage extends React.Component {
  state = {
    imgUrls: []
  };

  componentDidMount() {
    axios
      .get("https://insta.nextacademy.com/api/v1/images/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      })
      .then(result => {
        this.setState({
          imgUrls: [...result.data]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { imgUrls } = this.state;
    const { username, profileImage } = this.props;
    return (
      <>
        <UserProfileCard username={(username, profileImage)} />
        {/* A card to show the user info, such as profile image */}
        {imgUrls.map(url => (
          <RoundImage imgUrl={url} width="100px" height="100px" />
        ))}
      </>
    );
  }
}

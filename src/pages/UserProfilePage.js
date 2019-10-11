import axios from "axios";
import React from "react";
import { RoundImage } from "../styled/RoundImage";
import { UserProfileCard } from "../components/UserProfileCard";

export class UserProfilePage extends React.Component {
  state = {
    imgUrls: [
      "http://next-curriculum-instagram.s3.amazonaws.com/idol2-blake.jpg",
      "http://next-curriculum-instagram.s3.amazonaws.com/idol1-ryan.jpg",
      "http://next-curriculum-instagram.s3.amazonaws.com/bigfan-9AE7468E-4C35-41D1-AA68-31939891B5E1.png"
    ]
  };

  componentDidMount() {
    // axios
    //   .get("https://insta.nextacademy.com/api/v1/images/me")
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
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

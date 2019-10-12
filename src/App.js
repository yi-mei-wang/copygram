import React from "react";
import axios from "axios";
// Components
import { Loader } from "./styled/Loader";
import { LoginForm } from "./components/LoginForm";

import { MyNavbar as Navbar } from "./components/Navbar";
import { RoundImage as ProfileImage } from "./styled/RoundImage";
// Pages
import { UserProfilePage } from "./pages/UserProfilePage";

class App extends React.Component {
  state = {
    users: [],
    loading: true,
    currentUser: null
  };

  setCurrentUser = user => {
    this.setState({
      currentUser: user
    });
  };

  // Gets called after initial render and only gets called ONCE
  componentDidMount() {
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(results => {
        console.log(results);
        this.setState({
          users: [...results.data.slice(0, 10)],
          loading: false
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    let { users, loading, currentUser } = this.state;
    return (
      <>
        <Navbar />
        {currentUser ? (
          <>
            <Loader alt="loader" fill="yellow" width="125px" height="125px" />
          </>
        ) : (
          <>
            <LoginForm setCurrentUser={this.setCurrentUser} />
            <UserProfilePage />
          </>
          // <ul>
          //   {users.map((user, index) => (
          //     <li key={index}>
          //       {user.id}: {user.username}
          //       <ProfileImage
          //         imgUrl={user.profileImage}
          //         name={user.username}
          //         width={"180px"}
          //         height={"180px"}
          //       />
          //     </li>
          //   ))}
          // </ul>
        )}
      </>
    );
  }
}

export default App;

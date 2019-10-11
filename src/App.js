import React from "react";
import axios from "axios";
// User components
import { Loader } from "./styled/Loader";
import Navbar from "./components/Navbar";
import { RoundImage as ProfileImage } from "./styled/RoundImage";

class App extends React.Component {
  state = {
    users: [],
    loading: true
  };

  // Gets called after initial render and only gets called ONCE
  componentDidMount() {
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(results => {
        console.log(results);
        this.setState({
          users: [...results.data],
          loading: false
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    let { users, loading } = this.state;
    return (
      <>
        <Navbar />
        <h1>Home Page</h1>
        {loading ? (
          <>
            <Loader alt="loader" fill="yellow" />
          </>
        ) : (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.id}: {user.username}
                <ProfileImage
                  imgUrl={user.profileImage}
                  name={user.username}
                  width={"180px"}
                  height={"180px"}
                />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default App;

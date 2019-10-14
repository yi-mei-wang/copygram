import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import { MyNavbar as Navbar } from "./components/Navbar";
import { Loader } from "./styled/Loader";
// Pages
import { Homepage } from "./pages/Homepage";
import { LoginPage } from "./pages/LoginPage";
import { UserProfilePage } from "./pages/UserProfilePage";
// Helpers
import { fetchAllUsers } from "./helpers/APICalls";
import { PrivateRoute } from "./helpers/privateRoute";

class App extends React.Component {
  signal = axios.CancelToken.source();

  state = {
    users: [],
    isLoading: true,
    currentUser: localStorage.getItem("jwt")
  };

  async componentDidMount() {
    const data = await fetchAllUsers(
      "https://insta.nextacademy.com/api/v1/users",
      this.signal.token
    );
    this.setState({
      users: [...data.slice(0, 10)],
      isLoading: false
    });
  }

  componentWillUnmount() {
    this.signal.cancel("Api is being cancelled");
  }

  setCurrentUser = user => {
    this.setState({
      currentUser: user
    });
  };

  render() {
    let { users, isLoading, currentUser } = this.state;
    return (
      <>
        <Router>
          <Navbar currentUser={currentUser} />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          {isLoading ? (
            <Loader fill="#333" width="200px" height="200px" />
          ) : (
            <Switch>
              <Route
                path="/login"
                component={props => (
                  <LoginPage setCurrentUser={this.setCurrentUser} {...props} />
                )}
              />
              <PrivateRoute exact path="/users/me">
                <UserProfilePage currentUser={currentUser} />
              </PrivateRoute>
              <PrivateRoute exact path="/">
                <Homepage users={users} isLoading={isLoading} />
              </PrivateRoute>
            </Switch>
          )}
        </Router>
      </>
    );
  }
}

export default App;

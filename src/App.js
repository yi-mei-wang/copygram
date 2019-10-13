import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import { MyNavbar as Navbar } from "./components/Navbar";
// Pages
import { Homepage } from "./pages/Homepage";
import { LoginPage } from "./pages/LoginPage";
import { UserProfilePage } from "./pages/UserProfilePage";

class App extends React.Component {
  state = {
    users: [],
    lsLoading: true,
    currentUser: null
  };

  componentDidMount() {
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(results => {
        this.setState({
          users: [...results.data.slice(0, 10)],
          isLoading: false
        });
      })
      .catch(error => console.log(error));
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
          <Switch>
            <Route
              path="/login"
              component={props =>
                currentUser ? (
                  <Homepage {...props} users={users} isLoading={isLoading} />
                ) : (
                  <LoginPage setCurrentUser={this.setCurrentUser} {...props} />
                )
              }
            />
            <Route exact path="/users/me">
              <UserProfilePage />
            </Route>
            <Route exact path="/">
              <Homepage users={users} isLoading={isLoading} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Components
import { Loader } from "./styled/Loader";
import { LoginForm } from "./components/LoginForm";
import { MyNavbar as Navbar } from "./components/Navbar";
// Pages
import { Homepage } from "./pages/Homepage";
import { LoginPage } from "./pages/LoginPage";
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

  render() {
    let { users, loading, currentUser } = this.state;
    return (
      <>
        <Router>
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
          )}

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/users/me">
              <UserProfilePage />
            </Route>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

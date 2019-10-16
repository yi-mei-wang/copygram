import axios from "axios";
import React from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
// Components
import { MyNavbar as Navbar } from "./components/Navbar";
import { Loader } from "./styled/Loader";
import { AddButton } from "./styled/AddButton";
// Pages
import { Homepage } from "./pages/Homepage";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";
import UploadPage from "./pages/UploadPage";
import { UserProfilePage } from "./pages/UserProfilePage";
// Helpers
import { getDataWithHeaders } from "./helpers/APICalls";
import { PrivateRoute } from "./helpers/privateRoute";
// Stylesheet
import "./App.css";

class App extends React.Component {
  signal = axios.CancelToken.source();

  state = {
    isLoading: true,
    currentUser: localStorage.getItem("jwt")
  };

  async componentDidMount() {
    const resp = await getDataWithHeaders("/users");

    this.setState({
      users: [...resp.data.slice(0, 10)],
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

  setLoading = () => {
    this.setState({
      loading: !this.state.loading
    });
  };

  render() {
    let { isLoading, currentUser } = this.state;
    return (
      <>
        <Navbar currentUser={currentUser} />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        {isLoading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >
            <Loader
              dark="#1d3f72"
              light="#5699d2"
              width="200px"
              height="200px"
              className="mx-auto"
            />
          </div>
        ) : (
          <Switch>
            <Route
              key="login"
              path="/login"
              component={props => (
                <LoginPage
                  setCurrentUser={this.setCurrentUser}
                  {...props}
                  setLoading={this.setLoading}
                />
              )}
            />
            <Route
              key="signup"
              path="/signup"
              component={props => (
                <LoginPage
                  {...props}
                  setCurrentUser={this.setCurrentUser}
                  setLoading={this.setLoading}
                />
              )}
            />
            <Route
              path="/logout"
              render={props => (
                <LogoutPage {...props} setCurrentUser={this.setCurrentUser} />
              )}
            />
            <PrivateRoute
              exact
              path="/users/:id"
              render={UserProfilePage}
              setLoading={this.setLoading}
            />
            <PrivateRoute
              exact
              path="/"
              render={Homepage}
              setLoading={this.setLoading}
            />
            <PrivateRoute path="/upload" render={UploadPage} />
          </Switch>
        )}
        <Link to="/upload">
          <AddButton />
        </Link>
      </>
    );
  }
}

export default withRouter(App);

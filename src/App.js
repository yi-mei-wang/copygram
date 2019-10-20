import React from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import { observer } from "mobx-react";
// Components
import { MyNavbar as Navbar } from "./components/Navbar";
import { AddButton } from "./styled/AddButton";
// Pages
import { Homepage } from "./pages/Homepage";
import { LoginPage } from "./pages/LoginPage";
import { LogoutPage } from "./pages/LogoutPage";
import UploadPage from "./pages/UploadPage";
import { UserProfilePage } from "./pages/UserProfilePage";
// Helpers
import { PrivateRoute } from "./helpers/privateRoute";
// Hooks
// import useStores from "./hooks/useStores";
// Stylesheet
import "./App.css";

const App = () => {
  // const signal = axios.CancelToken.source();

  // const {
  //   rootStore: { loadingStore, userStore }
  // } = useStores();

  return (
    <>
      <Navbar />
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

      <Switch>
        <PrivateRoute exact path="/" render={Homepage} />

        <Route
          key="login"
          exact
          path="/login"
          component={props => <LoginPage {...props} />}
        />
        <Route
          key="signup"
          exact
          path="/signup"
          component={props => <LoginPage {...props} />}
        />
        <PrivateRoute
          exact
          path="/logout"
          render={props => <LogoutPage {...props} />}
        />
        <PrivateRoute exact path="/users/:id" render={UserProfilePage} />
        <PrivateRoute path="/upload" render={UploadPage} />
      </Switch>

      <Link to="/upload">
        <AddButton />
      </Link>
    </>
  );
};

export default observer(withRouter(App));

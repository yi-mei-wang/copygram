import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter, Switch, Route, Link } from "react-router-dom";
import { observer } from "mobx-react";
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
// Hooks
import useStores from "./hooks/useStores";
// Stylesheet
import "./App.css";

const App = () => {
  const signal = axios.CancelToken.source();

  const { rootStore } = useStores();
  console.log(rootStore);
  console.log(rootStore.loadingStore);

  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchAllUsers = async () => {
      const resp = await getDataWithHeaders("/users");
      setUsers([...resp.data.slice(0, 10)]);
    };
    fetchAllUsers();
    rootStore.loadingStore.setIsLoading();
  }, [rootStore.loadingStore]);

  useEffect(() => {
    signal.cancel("Api is being cancelled");
  }, [signal]);

  console.log(rootStore.loadingStore.isLoading);

  return (
    <>
      <Navbar />
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      {rootStore.loadingStore.isLoading ? (
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
            component={props => <LoginPage {...props} />}
          />
          <Route
            key="signup"
            path="/signup"
            component={props => <LoginPage {...props} />}
          />
          <Route path="/logout" render={props => <LogoutPage {...props} />} />
          <PrivateRoute exact path="/users/:id" render={UserProfilePage} />
          <PrivateRoute
            exact
            path="/"
            render={props => <Homepage users={users} {...props} />}
          />
          <PrivateRoute path="/upload" render={UploadPage} />
        </Switch>
      )}
      <Link to="/upload">
        <AddButton />
      </Link>
    </>
  );
};

export default observer(withRouter(App));

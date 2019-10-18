import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import copygramStore from "./stores/CopygramStore";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider copygramStore={copygramStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

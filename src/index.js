import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";

import "./scss/app.scss";

import App from "./App";

ReactDOM.render(
  <Router basename="/react-pizza">
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import reducer from "./reducer";
import App from "./App";

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

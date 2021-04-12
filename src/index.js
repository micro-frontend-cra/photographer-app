import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { unregister } from "./registerServiceWorker";

window.renderPhotographer = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
  unregister();
};

window.unmountRestaurant = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

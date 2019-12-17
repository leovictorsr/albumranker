import "../scss/index.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";
import Title from "./components/Title";

ReactDOM.render(<App />, document.getElementById("react-app"));
ReactDOM.render(<Title />, document.getElementById("footer"));

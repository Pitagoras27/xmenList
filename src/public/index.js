import React from "react";
import { render } from "react-dom";
import App from "./app";

import "./css/styles.css";

render(
	<App/>,
	document.getElementById("app")
);

export default App;
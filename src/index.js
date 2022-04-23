import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Component1 from "./useContext";
import InputValue from "./useRef";

const variable = document.getElementById("root");
const root = ReactDOM.createRoot(variable);
// root.render(<Component1 />);
root.render(<InputValue />);

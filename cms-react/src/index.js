import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { makeRoutes } from "./routes";
import App from "./App";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
serviceWorker.unregister();

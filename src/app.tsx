import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Grid } from "./grid";
import { store } from "./store/store";

import "./index.scss";



ReactDOM.render(
    <Provider store={store}>
        <Grid />
    </Provider>, 
    document.getElementById('root')
);

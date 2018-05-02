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

function spriteMove(x: number = 100) {
    
    const hero: any = document.getElementById('hr');
    let num = 0;
    setInterval(() => { 
        num++;
        if (num > 4) { num = 0 };
        hero.className = `hero-stand hr${num}`;
    }, x);

}

spriteMove(350);

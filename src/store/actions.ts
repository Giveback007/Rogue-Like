import { Action } from "redux";

export const APP_INIT = 'APP_INIT';

export class AppInit implements Action {
    readonly type = APP_INIT;
    public payload = 'IT REALLY WORKS!'
}
// https://github.com/reactjs/redux/issues/2361

// export const appInit = { 
//     type: APP_INIT,
//     payload: 'IT REALLY WORKS!'
// };

export type AppActions = AppInit;
import { createStore, Middleware, MiddlewareAPI, Dispatch, Action } from 'redux'
import { Reducer } from "redux";
import { // AppActions, 
    APP_INIT } from './actions';
import { grid } from '../utils';

export interface State {
    test: string;
    grid: any[];
}

const initState: State = {
    test: 'IT WORKS!',
    grid: grid(10, 10)
}

const rootReducer: Reducer<State> = (state = initState, action: any) => {
    switch (action.type) {
        case APP_INIT:
            return { ...state, test: action.payload };
        default:
            return state;
    }
}

// export const Logger: Middleware = api => next => action => 
//     next(action)

export const store = createStore(rootReducer);

import { createStore } from 'redux'
import { Reducer } from "redux";
import { 
    // AppActions, 
    APP_INIT } from './actions';

export  interface State {
    test: string;
    grid: any[];
}

const initState: State = {
    test: 'IT WORKS!',
    grid: Array(5).fill(0).map((x) => Array(5).fill(0))
}

const rootReducer: Reducer<State> = (state = initState, action: any) => {
    switch (action.type) {
        case APP_INIT:
            return { ...state, test: action.payload };
        default:
            return state;
    }
}

export const store = createStore(rootReducer);
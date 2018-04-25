import { createStore } from 'redux'
import { Reducer } from "redux";
import { AppActions, APP_INIT } from './actions';

export  interface State {
    test: string;
}

const initState: State = {
    test: 'IT WORKS!'
}

const rootReducer: Reducer<State> = (state = initState, action: AppActions) => {
    switch (action.type) {
        case APP_INIT:
            return { ...state, test: action.payload };
        default:
            return state;
    }
}

export const store = createStore(rootReducer);
import * as React from "react";
import { State } from './store/store';
// import { connector } from "./store/connector";
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { appInit } from "./store/actions";
// import { AppActions, AppInit } from "./store/actions";

const stateToProps = ({ test }: State) => ({ test });
const dispatchToProps = (dispatch: any
    // : Dispatch<AppActions>
) => ({
    appInit: () => dispatch(appInit)
})

// @connect(mapStateToProps, mapDispatchToProps)
class GridComponent extends React.Component<
    ReturnType<typeof stateToProps> & 
    ReturnType<typeof dispatchToProps>
> {
    render() {
        return (
            <div>
                <button onClick={this.props.appInit}>Test</button>
                <div>{this.props.test}</div>
            </div>
        )
    }
}


export const Grid = connect(stateToProps, dispatchToProps)(GridComponent)



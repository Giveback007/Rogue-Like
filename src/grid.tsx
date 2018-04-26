import * as React from "react";
import { State } from './store/store';
// import { connector } from "./store/connector";
import { connect } from 'react-redux';
// import { Dispatch } from "redux";
import { appInit } from "./store/actions";
// import { AppActions, AppInit } from "./store/actions";

const stateToProps = ({ test, grid }: State) => ({ test, grid });
const dispatchToProps = (dispatch: any
    // : Dispatch<AppActions>
) => ({
    appInit: () => dispatch(appInit)
})

class GridComponent extends React.Component<
    ReturnType<typeof stateToProps> & 
    ReturnType<typeof dispatchToProps>
> {
    render({ props } = this) {
        const hex = (arr) => arr.map((x, i) => <span className="hex" key={i}><div></div></span>)

        const hexRows = (grid = props.grid) => 
            grid.map((row, i) => <div className="hex-row" key={i}> { hex(row) } </div>)
            
        return (
        <div>
            <button onClick={props.appInit}>Test</button>
            <h3>{ props.test }</h3>
            <div className="hex-grid">
                { hexRows() }
            </div>
        </div>
        
        );
    }
}


export const Grid = connect(stateToProps, dispatchToProps)(GridComponent)



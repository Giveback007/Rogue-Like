import React = require("react");
import { State } from './store/store';
// import { connector } from "./store/connector";
import { connect } from 'react-redux';
// import { Dispatch } from "redux";
import { AppActions, AppInit } from "./store/actions";
import { Hero } from "./hero";
import { Dispatch } from "redux";

const stateToProps = ({ test, grid }: State) => ({ test, grid });
const dispatchToProps = (
    dispatch: Dispatch<AppActions>
) => ({
    appInit: () => dispatch(new AppInit)
})

class GridComponent extends React.Component<
    ReturnType<typeof stateToProps> & 
    ReturnType<typeof dispatchToProps>
> {
    render({ props } = this) {
        const hex = (arr) => arr.map((x, i) => 
            <div className="hex" key={i}>
                <div className="hex-inner">
                    <div className="hex-content"> 
                        <Hero />
                    </div>
                </div>
            </div>)

        const hexRows = (grid = props.grid) => 
            grid.map((row, i) => <div className={`hex-row ${i % 2 ? 'even' : 'odd'}`} key={i}> { hex(row) } </div>)
            
        return (
        <div>
            <button onClick={ props.appInit }>Test</button>
            <h3>{ props.test }</h3>
            <div className="hex-grid">
                { hexRows() }
            </div>
        </div>
        
        );
    }
}


export const Grid = connect(stateToProps, dispatchToProps)(GridComponent);

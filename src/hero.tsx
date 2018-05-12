import React = require("react");
import { heroSprite } from "./characters";
import { random } from "./utils";


class HeroComponent extends React.Component<{}, { frame: number }> {
    state = { frame: 0 }
    constructor(props) { super(props) }

    componentDidMount(frame = this.state.frame) {
        setInterval(() => {
            frame++;
            if (frame > 3) { frame = 0 };
            this.setState({ frame });
        }, random(200, 750))
    }

    render({ props, state } = this) {
        const imgStyle = { left: -32 * state.frame };

        return (
            <div className='character'>
                <img 
                    style={imgStyle}
                    src={heroSprite.standing.img}
                />
            </div>
        )
    }
}

export const Hero = HeroComponent;
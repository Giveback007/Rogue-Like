import React = require("react");
import { heroSprite } from "./characters";


class HeroComponent extends React.Component<{} & {}> {
    render({ props } = this) {
        
        return (
            <div className='character'>
                <img src={heroSprite.standing.img}/>
            </div>
        )
    }
}

export const Hero = HeroComponent;
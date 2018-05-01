import React = require("react");

class HeroComponent extends React.Component<{} & {}> {
    render({ props } = this) {
        return (
            <div>
                <div className="hero-sprite hero-stand"></div>
            </div>
        )
    }
}

export const Hero = HeroComponent;
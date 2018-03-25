import React, { Component } from 'react';
import lightbulbOff from "./pics/lightbulb-off.png";
import lightbulbOn from "./pics/lightbulb-on.png";

class Switch extends Component {
    constructor() {
        super();
        this.state = {
            switch: false
        }
    }
    changeSwitchState = () => this.setState({ switch: !this.state.switch });
    render() {
        return (
            <div>
                <img alt="bulb" className="lightbulb" onClick={this.changeSwitchState} src={this.state.switch ? lightbulbOn : lightbulbOff} />
            </div>
        );
    }
}

export default Switch;

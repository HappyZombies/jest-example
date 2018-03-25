import React, { Component } from 'react';
import users from "./users.json";

class SillyComponent extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        // emulate a database request here.
        setTimeout(() => {
            this.setState({ users: users })
        }, 500);
    }
    render() {
        return (
            <ul className="users">
                {this.state.users.map((user) => {
                    return <li key={user.id}>{user.username}</li>
                })}
            </ul>
        );
    }
}

export default SillyComponent;

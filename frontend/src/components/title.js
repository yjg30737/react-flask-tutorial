import React, { Component } from "react";

export function sum(a, b) {
    return a+b;
}

export class Title extends Component {
    render() {
        return <h1>{this.props.username}'s {this.props.sitename}</h1>
    }
}
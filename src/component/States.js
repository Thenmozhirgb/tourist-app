import React, { Component } from "react";

import "./States.css";

export default class States extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div><h3>
                <a href="states.js" onClick={this.handleClick}>
                    {this.props.statesDetails.statesName}</a>
            </h3>
                <img src={this.props.statesDetails.imageUrl}
                    alt=""
                    width="300"
                    height="300" />
            </div>
        )
    }
}
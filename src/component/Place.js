import React, { Component } from "react";

export default class Place extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div><h3>
                <a href="places.js" onClick={this.handleClick}>
                    {this.props.placesDetails.placesName}</a>
            </h3>
                <img src={this.props.placesDetails.imageUrl}
                    alt=""
                    width="300"
                    height="300" />
 
            </div>
               
        )
    }
}
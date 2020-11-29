import React, { Component } from "react";

export default class City extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div><h3>
                <a href="cities.js" onClick={this.handleClick}>
                    {this.props.citiesDetails.citiesName}</a>
            </h3>
                <img src={this.props.citiesDetails.imageUrl}
                    alt=""
                    width="300"
                    height="300" />
            </div>
        );
    }
}
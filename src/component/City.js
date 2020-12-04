import React, { Component } from "react";
import "./../styles/city.css";
export default class City extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="city-city">
            <div className="city-name" >
                <h3>
                <a href="" onClick={this.handleClick}>
                    {this.props.citiesDetails.citiesName}</a>
            </h3></div>
            <div className="city-img">
                <img src={this.props.citiesDetails.imageUrl}
                    alt=""
                    width="250"
                    height="250" />
            </div>
            </div>
        );
    }
}

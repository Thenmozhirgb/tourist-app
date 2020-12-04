import React, { Component } from "react";
import "./../styles/place.css";
export default class Place extends Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        alert("Hello!");
    }
    render() {
        return (
            <div>
                <div className="place-name"><h3>
                    <a href="places.js" onClick={this.handleClick}>
                        {this.props.placesDetails.placesName}</a>
                </h3></div>
                <div className="place-img">
                    <img src={this.props.placesDetails.imageUrl}
                        alt=""
                        width="250"
                        height="250" />
                </div>
            </div>

        )
    }
}

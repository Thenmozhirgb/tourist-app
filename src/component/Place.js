import React, { Component } from "react";
import "./../styles/place.css";
export default class Place extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <div>
                <div className="place-name">
                    <h3>
                
                    {this.props.placesDetails.placesName}
            </h3>
            </div>
    {/*{this.props.placesDetails.description}*/}
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
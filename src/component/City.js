import React, { Component } from "react";
import "./../styles/city.css";
import { getPlaces } from "../redux/actions/placesAction";
import { connect } from "react-redux";
class City extends Component {
    constructor(props) {
        super(props);
    }
    handleClick = (citiesId) => {
        this.props.getPlaces(citiesId);
    }

    render() {
        return (
            <div className="city-city" onClick={() => this.handleClick(this.props.citiesDetails.citiesId)}>
                <div className="city-name" >
                    <h3>
                        {this.props.citiesDetails.citiesName}
                    </h3>
                </div>
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
const mapsDispatchToProps = dispatch => ({
    getPlaces: (citiesId) => dispatch(getPlaces(citiesId))
});
export default connect(null, mapsDispatchToProps)(City);
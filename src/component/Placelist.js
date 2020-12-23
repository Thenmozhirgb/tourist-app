import React, { Component } from "react";
import Place from "./Place";
import places from "./../data/place.json";
import { getPlaces } from "./../redux/actions/placesAction";
import { connect } from "react-redux";
import "./../styles/place.css";

class Placelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: places[0].places,
        }
    }

    state = {
        places: this.props.places
    };
    componentDidMount() {
        this.props.getPlaces(10);
    }
    render() {
        return (
            <div className= "placeslist">
                {
                    this.props.places ? this.props.places.map(placesDetails => {
                        return (
                            <div>
                                <Place placesDetails={placesDetails} />
                            </div>
                        );
                    }
                    ) : ""
                }
            </div>
        )
    }
}
const mapStateToProps = (places) => ({
    ...places.places
});

const mapDispatchToProps = dispatch => ({
    getPlaces: (citiesID) => dispatch(getPlaces(citiesID))
});

export default connect(mapStateToProps, mapDispatchToProps)(Placelist);

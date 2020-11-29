import React, { Component } from "react";
import Place from "./Place";
import places from "./../data/place.json";
import { getPlaces } from "./../redux/actions/placesAction";
import { connect } from "react-redux";

class Placelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: places[0].places,
        }
    }
    componentDidMount() {
        this.props.getPlaces();
    }
    render() {
        return (
            <div>
                {
                    this.props.places ? this.props.places.map(placesDetails => {
                        return (
                            <div>
                                <Place placesDetails={placesDetails} />
                            </div>
                        );
                    }
                    ) : "thenmozhi"
                }
            </div>
        )
    }
}
const mapStateToProps = (places) => ({
    ...places.places
});

const mapDispatchToProps = dispatch => ({
    getPlaces: () => dispatch(getPlaces())
});

export default connect(mapStateToProps, mapDispatchToProps)(Placelist);

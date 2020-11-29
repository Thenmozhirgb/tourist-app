import React, { Component } from "react";
import City from "./City";
import cities from "./../data/cities.json";
import { getCities } from "../redux/actions/citiesAction";
import { connect } from "react-redux";
import "./../styles/city.css";
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: cities[0].cities,
        }
    }
    componentDidMount() {
        this.props.getCities(4);
    }

    render() {
        return (
            <div className="p">
                {
                    this.props.cities ? this.props.cities.map(citiesDetails => {
                        return (
                            <div>
                                <City citiesDetails={citiesDetails} />
                            </div>
                        )
                    }
                    ) : ""
                }
            </div>
        );
    }
}
const mapStateToProps = (cities) => ({
    ...cities.cities
});

const mapDispatchToProps = dispatch => ({
    getCities: (stateId) => dispatch(getCities(stateId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);




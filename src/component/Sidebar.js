import React, { Component } from "react";
import City from "./City";
import cities from "./../data/cities.json";
import { getCities } from "../redux/actions/citiesAction";
import {connect} from "react-redux";

 class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: cities[0].cities,
        }
    }
    componentDidMount() {
        this.props.getCities();
}

    render() {
        return (
            <div>
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
    getCities: () => dispatch(getCities())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);




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
    state = {
        cities: this.props.cities
    };

    static getDerivereStateFromProps(props, state) {
        if (props.cities !== state.cities) {
            return {
                cities: props.cities
            };
        }
        return null;
    }
    shouldComponentUpdate(props){
      return true
    }

    componentDidMount() {
        this.props.getCities(1);
    }

    render() {
        return (
            <div className="sidebar">
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




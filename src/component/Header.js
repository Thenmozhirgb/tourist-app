import React, { Component } from "react";
import "../styles/header.css";
import States from "./States";
import { connect } from "react-redux";
import { getStates } from "../redux/actions/statesAction";
import { getCities } from "../redux/actions/citiesAction";
import { getPlaces } from "../redux/actions/placesAction";


class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getState();
  }
  render() {
    return (
      <div>
        <header className="component-header">
          Tourist places in India
        </header>
        {
          this.props.states ? this.props.states.map(statesDetails => {
            return (
              <div className="state-header" >
                <States statesDetails={statesDetails} />
              </div>
            )
          }
          ) : "thenmozhi"
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state.states
});

const mapDispatchToProps = dispatch => ({
  getState: () => dispatch(getStates()),
  getCities: () => dispatch(getCities()),
  getPlaces: () => dispatch(getPlaces())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

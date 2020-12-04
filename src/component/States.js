import React, { Component } from "react";
import "../styles/state.css";
import { connect } from "react-redux";
import { getCities } from "../redux/actions/citiesAction";

class States extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (statesId) => {
        this.props.getCities(statesId);
    }

    render() {
        return (
            <div className="section-state" onClick={() => this.handleClick(this.props.statesDetails.statesId)}>
                <div className="section-state-name">
                    <h3>
                        {this.props.statesDetails.statesName}
                    </h3>
                </div>
                <div className="section-state-img">
                    <img src={this.props.statesDetails.imageUrl}
                        alt=""
                        width="250"
                        height="250" />
                </div>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getCities: (statesId) => dispatch(getCities(statesId))
});

export default connect(null, mapDispatchToProps)(States);

import React, { Component } from "react";
import "../styles/state.css";
import Sidebar from "./Sidebar";

export default class States extends Component {
    constructor(props) {
        super(props);
    }

  /*handleClick () {
    this.setState({cities: props.cities}) ;
  }*/
       
    
    render() {
        return (
            <div className="section-state">
                <div className="section-state-name">
                    <h3>
                        <a href="states.js" onClick={this.handleClick}>
                            {this.props.statesDetails.statesName}</a>
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
import React, {Component} from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Placelist from "../component/Placelist";

export default class Body extends Component {
    render() {
        return(
            <div>
                <div>
                <Header />
                <Sidebar />
                </div>
                <Placelist />
            </div>
        )
    }
}
import React, { Component } from "react";
import "../assets/style.css";

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                <div className="header__title">Вы зашли под именем Игорь</div>
                </div>
            </div> 
        )
    }

}
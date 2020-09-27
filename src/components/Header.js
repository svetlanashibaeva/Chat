import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "../assets/style.css";

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <Link to="/">
                        <button className="btn-exit">Выйти</button>
                    </Link>
                    <div className="header-title">&nbsp;Вы зашли под именем {this.props.selfName}</div>
                </div>
            </div> 
        )
    }

}
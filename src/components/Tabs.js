import React, { Component }from 'react';

import "../assets/style.css";

export default class Tabs extends Component {
    render() {
        return(
            <>
                <div className="container">
                    <div className="tabs">
                        <button className="tab active" id="flud" onClick={this.props.onChange}>Флуд</button>
                        <button className="tab" id="work" onClick={this.props.onChange}>Работа</button>
                    </div>
                </div>   
            </>
        )
    }
}

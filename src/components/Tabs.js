import React, { Component }from 'react';
import "../assets/style.css";

export default class Tabs extends Component {
    render() {
        return(
            <>
                <div className="container">
                    <div className="tabs">
                        <button className="tab active">Флуд</button>
                        <button className="tab">Работа</button>
                    </div>
                </div>   
            </>
        )
    }
}

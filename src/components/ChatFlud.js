import React, { Component } from "react";
import "../assets/style.css";

export default class ChatFlud extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="messages">
                        <div className="messages__item left">
                            <div className="messages__item-name">Иван Иванов <span>12:00 пт</span></div>
                            <div className="messages__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <div className="messages__item right">
                            <div className="messages__item-name">Саша Петров <span>12:01 пт</span></div>
                            <div className="messages__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <div className="messages__item left">
                            <div className="messages__item-name">Иван Иванов <span>12:02 пт</span></div>
                            <div className="messages__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <div className="messages__item left">
                            <div className="messages__item-name">Катя Клэп <span>12:03 пт</span></div>
                            <div className="messages__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                        <div className="messages__item right">
                            <div className="messages__item-name">Саша Петров <span>12:04 пт</span></div>
                            <div className="messages__item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
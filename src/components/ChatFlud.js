import React, { Component } from "react";
import data from "../db.json";
import CreateMessage from './CreateMessage';
import "../assets/style.css";

export default class ChatFlud extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        const local = JSON.parse(localStorage.getItem('messages')) 

        if (local) {
            this.setState({
                items: local
            });
        } else {
            const messages = data.message
            localStorage.setItem('messages', JSON.stringify(messages));
            this.setState({
                items: messages
            });
        }
    }

    addItem(text) {
        const newItems = {
            userId: 1,
            userName: "Иван Петриченко",
            text: text,
            id: 6,
            time: "12:02:46"
        };

        let items = {...this.state.items, [this.state.items.length]: newItems}
        
        

        localStorage.setItem('new messages', JSON.stringify(items));

        console.log('new arr', items)
        console.log('old arr', this.state.items)

        this.setState({
            items: Object.values(items)
        })

        

    }

    

    render() {
        const {items}= this.state;

        console.log('new arr2', items)
        console.log('old arr2', this.state.items)
        return (
            <>
                <div className="container">
                    <div className="messages">
                    {items.map((item) => (
                            <div className={item.userId === 1 ? "messages__item right" : "messages__item"}>
                                <div className="messages__item-name">{item.userName}<span> {item.time}</span>
                                    <button 
                                        type="button"
                                        className="btn-trash"
                                        > 
                                        <i className="fa fa-trash-o"></i>
                                    </button>
                                </div>
                                <div className="messages__item-text">{item.text} </div>
                            </div> 
                    ))}
                    </div>
                </div>
                <CreateMessage onAdd={this.addItem}/>
            </>
        )
    }
}
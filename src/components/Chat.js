import React, { Component } from "react";
import data from "../db.json";
import CreateMessage from './CreateMessage';
import Tabs from './Tabs';
import "../assets/style.css";

let changeItemId = null
let chatTheme = "flud"

export default class ChatFlud extends Component {

    constructor() {
        super();
        this.state = {
            selfId: 1,
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }

    componentDidMount() {
        this.loadLocal()
    }

    loadLocal() {
        const local = JSON.parse(localStorage.getItem(chatTheme)) 

        if (local) {
            this.setState({
                items: local
            });
        } else {
            this.saveChanges(chatTheme == "flud" ? data.flud : data.work)
        }
    }

    addItem(text) {
        if (text === '') {
            return
        }

        if (changeItemId) {
            let items = [...this.state.items]
            const index = items.findIndex(elem => elem.id === changeItemId);

            items[index].text = text
            changeItemId = null
            this.saveChanges(items)
            return
        }

        const newItems = {
            userId: this.state.selfId,
            userName: "Иван Петриченко",
            text: text,
            id: this.state.items.length + 1,
            time: Date()
        };

        this.saveChanges([...this.state.items, newItems])
    }

    deleteItem(id) {
        let items = [...this.state.items]
        const index = items.findIndex(elem => elem.id === id);
        items.splice(index, 1)

        this.saveChanges(items)
    }

    changeItem(id) {
        let items = [...this.state.items]
        const index = items.findIndex(elem => elem.id === id);

        changeItemId = items[index].id
        document.querySelector('.form__input').value = items[index].text
    }

    saveChanges(items) {
        localStorage.setItem(chatTheme, JSON.stringify(items));

        this.setState({
            items: items
        })
    }

    changeTab(e) {
        chatTheme = e.target.id;
        changeItemId = null;
        e.target.classList.add('active');

        this.loadLocal()
    }

    render() {
        const {items}= this.state;

        return (
            <>
            <Tabs onChange={this.changeTab} />
                <div className="container">
                    <div className="messages">
                    {items.map((item) => (
                            <div className={item.userId === 1 ? "messages__item right" : "messages__item"} id = {item.id}>
                                <div className="messages__item-name">{item.userName}<span> {item.time}</span>
                                    <button 
                                        type="button"
                                        className="btn-trash"
                                        onClick = {() => this.deleteItem(item.id)}
                                        > 
                                        <i className="fa fa-trash-o"></i>
                                    </button>
                                    <button 
                                        type="button"
                                        className="btn-trash"
                                        onClick = {() => this.changeItem(item.id)}
                                        > 
                                        <i className="fa fa-star"></i>
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
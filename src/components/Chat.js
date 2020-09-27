import React, { Component } from "react";
import data from "../db.json";
import CreateMessage from './CreateMessage';
import Tabs from './Tabs';
import Header from './Header';

import "../assets/style.css";

let changeItemId = null;
let chatTheme;
let selfId, selfName;

export default class Chat extends Component {

    constructor() {
        super();

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.loadLocal = this.loadLocal.bind(this);
    }

    componentDidMount() {
        chatTheme = "flud";
        this.setupUser();
        this.loadLocal();
    }

    setupUser() {
        const users = JSON.parse(localStorage.getItem('users'));

        const name = localStorage.getItem('currentUserName');
        let id;

        if (users) {
            const index = users.findIndex(elem => elem.name === name);
    
            if (index > -1) {
                id = users[index].id
            } else {
                id = users.length + 1;
                localStorage.setItem('users', JSON.stringify([...users, {id, name}]))
            }
        } else {
            id = 1;
            localStorage.setItem('users', JSON.stringify([{id, name}]))
        }
        selfId = id;
        selfName = name;

        localStorage.removeItem('currentUserName');
    }

    loadLocal() {
        const local = JSON.parse(localStorage.getItem(chatTheme)); 

        if (local) {
            this.setState({
                items: local
            });
            document.querySelector('.messages').scrollTop = document.querySelector('.messages').scrollHeight; 
        } else {
            this.saveChanges(chatTheme === "flud" ? data.flud : data.work)
        }
    }

    addItem(text) {
        if (text === '') {
            return
        }

        if (changeItemId) {
            let items = [...this.state.items]
            const index = items.findIndex(elem => elem.id === changeItemId);
            items[index].text = text;
            changeItemId = null;
            this.saveChanges(items)
            return
        }

        let d = new Date();
        let res = [d.getHours(), d.getMinutes(), d.getSeconds()].map(function (x) {
            return x < 10 ? "0" + x : x
          }).join(":");

        const newItems = {
            userId: selfId,
            userName: selfName,
            text: text,
            id: this.state.items.length + 1,
            time: res
        };
        this.saveChanges([...this.state.items, newItems])
    }

    deleteItem(id) {
        let items = [...this.state.items];
        const index = items.findIndex(elem => elem.id === id);
        items.splice(index, 1)

        this.saveChanges(items)
    }

    changeItem(id) {
        let items = [...this.state.items];
        const index = items.findIndex(elem => elem.id === id);
        changeItemId = items[index].id;
        document.querySelector('.form-input').value = items[index].text;
    }

    saveChanges(items) {
        localStorage.setItem(chatTheme, JSON.stringify(items));
        this.setState({
            items: items
        })
        document.querySelector('.messages').scrollTop = document.querySelector('.messages').scrollHeight;
    }

    changeTab(e) {
        chatTheme = e.target.id;
        changeItemId = null;
        const tabs = document.querySelectorAll('.tab');
        if (e.target) {
            tabs.forEach(tab => tab.classList.remove('active'))
            e.target.classList.add('active');   
        }
        
        this.loadLocal()
    }

    render() {
        const {items}= this.state;

        return (
            <>
            <Header selfName={selfName}/>
            <Tabs onChange={this.changeTab} />
                <div className="container">
                    <div className="messages">
                    {items.map((item) => (
                        item.userId === selfId ? 
                            (<div className="messages-item right">
                                <div className="messages-item-name">{item.userName}<span>&nbsp;{item.time}</span>
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
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                </div>
                                <div className="messages-item-text">{item.text} </div>
                            </div>) : 
                            (<div className="messages-item">
                                <div className="messages-item-name">{item.userName}<span>&nbsp;{item.time}</span> </div>
                                <div className="messages-item-text">{item.text} </div>
                            </div>)
                    ))}
                    </div>
                </div>
                <CreateMessage onAdd={this.addItem}/>
            </>
        )
    }
}
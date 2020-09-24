import React, {Component} from 'react';

import "../assets/style.css";

export default class CreateMessage extends Component {

    constructor() {
        super();
        this.state = {
            text: ""
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text:""
        })
    }

    render() {
        return (
            <>
            <div className="container">
                <form className="form" onSubmit = {this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Написать сообщение..."
                        className="form__input"
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                    <button 
                        type="submit"
                        className="form__btn"
                    > Отправить</button>
                </form>
            </div>     
            </>
        )
    }
}

import React, {Component} from 'react';
import "../assets/style.css";

export default class CreateMessage extends Component {
    render() {
        return (
            <>
            <div className="container">
                <form className="form">
                    
                    <input
                        type="text"
                        placeholder="Написать сообщение..."
                        className="form__input"
                    />
                    <button 
                        type="submit"
                        className="form__btn">
                        Отправить</button>
                </form>
            </div>     
            </>
        )
    }
}

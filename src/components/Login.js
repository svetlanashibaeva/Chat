import React from 'react';
import { useHistory } from "react-router-dom";

import "../assets/style.css";

const Login = () => {

    let text;

    const history = useHistory();

    const onValueChange = (e) => {
       text = e.target.value;
    }

    const onLogin =(e) => {
        e.preventDefault();

        if (text) {
            localStorage.setItem('currentUserName', text )
            history.push("/chat");
        }
    }

    return (
        <>
        <div className="login">
            <form className="form-login">
                <h3>Авторизуйтесь</h3>    
                <input
                    type="text"
                    placeholder="Введите логин"
                    className="form-login__input"
                    onChange={onValueChange}
                />
                <button className="btn-login" onClick={onLogin}>Вход</button>
            </form>
        </div>
    </>
    )
}

export  default Login;
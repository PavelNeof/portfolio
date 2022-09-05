import React from "react";
import s from './Contacts.module.css'
import Form from "./InputBlock/Form";


function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <h3>Контакты</h3>
                <Form/>
                <button>Отправить</button>
            </div>
        </div>
    );
}

export default Contacts;

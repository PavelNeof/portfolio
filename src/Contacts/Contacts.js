import React from "react";
import s from './Contacts.module.css'
import Form from "./InputBlock/Form";
import Button from "../Common/Button/Button";


function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <h3 className={"title"}>Contacts</h3>
                <Form/>
                {/*<button>Отправить</button>*/}
                <Button title={'Отправить'}/>
            </div>
        </div>
    );
}

export default Contacts;

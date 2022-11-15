import React from "react";
import s from './Contacts.module.css'
import Form from "./InputBlock/Form";
import Button from "../Common/Button/Button";
import Fade from 'react-reveal/Fade';


function Contacts() {
    return (
        <div className={s.contacts} id={'contacts'}>
            <Fade bottom>
            <form className={s.container}>
                <h3 className={"title"}>Contacts</h3>
                   <Form/>
                <Button title={'Отправить'}/>
            </form>
            </Fade>
            </div>
    );
}

export default Contacts;

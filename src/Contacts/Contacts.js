import React from "react";
import s from './Contacts.module.css'
import Form from "./InputBlock/Form";
import Button from "../Common/Button/Button";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Contacts() {
    return (
        <div className={s.contacts} id={'contacts'}>

            <form className={s.container}>
                <h3 className={"title"}>Contacts</h3>
                   <Form/>
                <Zoom>
                <Button title={'Отправить'}/>
                </Zoom>
            </form>

            </div>
    );
}

export default Contacts;

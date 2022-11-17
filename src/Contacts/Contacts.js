import {React, useRef} from "react";
import s from './Contacts.module.css'
import Form from "./InputBlock/Form";
import Button from "../Common/Button/Button";

import Zoom from 'react-reveal/Zoom';

function Contacts() {

    const form=useRef()

    const sendEmail =() =>{

    }
    return (
        <div className={s.contacts} id={'contacts'}>


            <form className={s.container} ref={form} onSubmit={sendEmail}>
                <h3 className={"titleOnBlack"}>Contacts</h3>
                   <Form/>
                <Zoom>
                <Button title={'Отправить'}/>
                </Zoom>
            </form>

            </div>
    );
}

export default Contacts;

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


            <div className={s.container}>
                <h3 className={"titleOnBlack"}>Contacts</h3>
                   <Form/>
                {/*<Zoom>*/}
                {/*<Button title={'Отправить'}/>*/}
                {/*</Zoom>*/}
            </div>

            </div>
    );
}

export default Contacts;

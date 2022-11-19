import React, {useRef} from "react";
import s from './Form.module.css'
import Zoom from 'react-reveal/Zoom';
import emailjs from '@emailjs/browser';
import Button from "../../Common/Button/Button";


function Form() {

    const form = useRef();

    function sendMail(e) {
        e.preventDefault();
        let tempParams = {
            from_name: document.getElementById('fromName').value,
            to_name: document.getElementById('toName').value,
            message: document.getElementById('msg').value,
        }
        emailjs.send('service_3gpj5o9', 'template_t9xqtt6', tempParams, '2HUi9aKKAOtBuZJjR')
            .then(function (res) {
                console.log('success', res.status)
                alert('Success, your mail has been sent.')
            })
            .catch(error => alert(error))
    }

    return (
        <form ref={form} onSubmit={sendMail}>
            <Zoom>
                <label className={s.label}>Name</label>
                <input name="name" id={'toName'} type="text" className={s.input}/>
            </Zoom>
            <Zoom>
                <label className={s.label}>Email</label>
                <input name="fromName" id={'fromName'} type="email" className={s.input}/>
            </Zoom>
            <Zoom>
                <label className={s.label}>Message</label>
                <textarea name="messages" id={'msg'} className={s.textarea}/>
            </Zoom>
            <Zoom>
                <div className={s.button}>
                    <Button type="submit" title={'Отправить'}/>
                </div>
            </Zoom>
        </form>


    );
}

export default Form;

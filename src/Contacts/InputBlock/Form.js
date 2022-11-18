import React, {useRef} from "react";
import s from './Form.module.css'
import Zoom from 'react-reveal/Zoom';
import emailjs from '@emailjs/browser';
import {useFormik} from "formik";


function Form() {

    // function sendMail(params){
    //     let tempParams = {
    //         from_name: document.getElementById('fromName').value,
    //         to_name: document.getElementById('toName').value,
    //         message:document.getElementById('msg').value,
    //     }
    //     emailjs.send('service_3gpj5o9','template_t9xqtt6',tempParams)
    //         .then(function (res){
    //             console.log('success', res.status)
    //         })
    // }

    // function sendMail(params){
    //     let tempParams = {
    //         from_name: document.getElementById('fromName').value,
    //         to_name: document.getElementById('toName').value,
    //         message:document.getElementById('msg').value,
    //     }
    //     emailjs.send('service_3gpj5o9', 'template_t9xqtt6', tempParams)
    //         .then(function (res){
    //             console.log('success', res.status)
    //         })
    // }
    // const form = useRef();
    //
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //
    //     emailjs.sendForm('service_3gpj5o9', 'template_t9xqtt6', form.current, '2HUi9aKKAOtBuZJjR')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            messages: '',
        },
        validate: values => {
            let errors = {}
            if (values.email === '') {
                errors.email = 'Email required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (values.name < 2) {
                errors.name = 'Incorrect name'
            }
            if (values.messages === '') {
                errors.messages = 'Please write a message'
            }
            return errors
        },
        onSubmit: values => {

            emailjs.send('service_3gpj5o9', 'template_t9xqtt6', values, '2HUi9aKKAOtBuZJjR')
                .then((response) => {
                    console.log('success')

                })
                .catch((err) => {
                    console.log('error')

                })
                .finally(() => {
                    console.log('finish')
                })

            formik.resetForm()
        },
    });

    // {/*<Zoom>*/}
    // {/*<input type="text" placeholder={'Name'} id="toName" className={s.input}/>*/}
    // {/*    </Zoom>*/}
    // {/*<Zoom>*/}
    // {/*<input type="text" placeholder={'Email'} id="fromName" className={s.input}/>*/}
    // {/*</Zoom>*/}
    // {/*<Zoom>*/}
    // {/*<textarea placeholder={'Message'} id="msg" className={s.textarea}/>*/}
    // {/*</Zoom>*/}
    // {/*<button onClick={sendMail}>send</button>*/} ref={form}

    return (
        <form  onSubmit={formik.handleSubmit}>
            <label>Name</label>
            <input name="name" type="text"  />
            <label>Email</label>
            <input name="email" type="email"  />
            <label>Message</label>
            <textarea name="messages"  />
            <input type="submit" value="Send" />
        </form>



    );
}

export default Form;

import React from "react";
import s from './Form.module.css'
import Button from "../../Common/Button/Button";


function Form() {
    return (
        <div className={s.inputBlock}>
            <input placeholder={'input'} className={s.input}/>
            <input placeholder={'input'} className={s.input}/>
            <textarea placeholder={'textarea'} className={s.textarea}/>
        </div>
    );
}

export default Form;

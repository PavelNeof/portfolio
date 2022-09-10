import React from "react";
import s from './Form.module.css'


function Form() {
    return (
        <div className={s.inputBlock}>
            <input placeholder={'input'}/>
            <input placeholder={'input'}/>
            <textarea className={s.textarea} placeholder={'textarea'}/>
        </div>
    );
}

export default Form;

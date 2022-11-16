import React from "react";
import s from './Form.module.css'
import Zoom from 'react-reveal/Zoom';

function Form() {
    return (
        <div className={s.inputBlock}>
            <Zoom>
            <input placeholder={'input'} className={s.input}/>
                </Zoom>
            <Zoom>
            <input placeholder={'input'} className={s.input}/>
            </Zoom>
            <Zoom>
            <textarea placeholder={'textarea'} className={s.textarea}/>
            </Zoom>
        </div>
    );
}

export default Form;

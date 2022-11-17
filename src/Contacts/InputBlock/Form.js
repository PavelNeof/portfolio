import React from "react";
import s from './Form.module.css'
import Zoom from 'react-reveal/Zoom';

function Form() {
    return (
        <div className={s.inputBlock}>
            <Zoom>
            <input placeholder={'your name'} className={s.input}/>
                </Zoom>
            <Zoom>
            <input placeholder={'your email'} className={s.input}/>
            </Zoom>
            <Zoom>
            <textarea placeholder={'your message'} className={s.textarea}/>
            </Zoom>
        </div>
    );
}

export default Form;

import React from "react";
import s from './Work.module.scss'


function Work(props) {
    return (
        <div className={s.work}>
            <div style={props.style} className={s.picture}>

                <button className={s.button}>просмотреть</button>
            </div>
            <div className={s.box}>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
            </div>
        </div>
    );
}

export default Work;

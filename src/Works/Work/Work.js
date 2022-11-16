import React from "react";
import s from './Work.module.scss'


function Work(props) {
    return (
        <div className={s.work}>

            <div style={props.style} className={s.picture}>
                <a className={s.button} href={props.href} target="_blank">view the project</a>
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

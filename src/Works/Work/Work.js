import React from "react";
import s from './Work.module.css'


function Work(props) {
    return (
        <div className={s.work}>
            <div style={props.style} className={s.picture}>
                {props.picture}
                <button>просмотреть</button>
            </div>
            <div></div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>

        </div>
    );
}

export default Work;

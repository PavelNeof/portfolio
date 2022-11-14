import React, {useState} from "react";
import s from './Skill.module.css'


function Skill(props) {
    const [show, setShow] = useState(false)

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    return (
        <div onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave} className={s.skill}>

            <div  className={s.icon}><img src={props.img}/> </div>
            <div className={`${s.box} ${show ? s.hoveredBox : s.unhoveredBox}`}>
                <div className={s.inBox}>
                <h3 className={s.title}>{props.title}</h3>
                <p className={s.description}>
                    {props.description}
                </p>
                </div>
            </div>
        </div>
    );
}

export default Skill;

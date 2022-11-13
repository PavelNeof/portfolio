import React from "react";
import s from './Skill.module.css'


function Skill(props) {
    return (
         <div className={s.skill}>
             <div className={s.icon}></div>
             <h3 className={s.title}>{props.title}</h3>
             <p className={s.description}>
                 {props.description}
             </p>

            {/*<div className="hover-text-one">*/}
            {/*    <figure className="effect-text-two">*/}
            {/*        <img src="https://klike.net/uploads/posts/2018-06/1528641301_5.jpg" alt=""/>*/}
            {/*        <figcaption>*/}
            {/*            <h3>Lorem <span>ipsum</span></h3>*/}
            {/*            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>*/}
            {/*        </figcaption>*/}
            {/*    </figure>*/}
            {/*</div>*/}

         </div>
    );
}

export default Skill;

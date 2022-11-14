import React from "react";
import s from './Square.module.css';


export function Square(props) {
    return (
        <div className={s.square}>
            <a href="#">
                <div className={s.back}>
                <svg className={s.img} style={props.style}></svg>
                </div>
            </a>
        </div>
    );
}

export default Square;
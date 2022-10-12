import React from "react";
import s from './Square.module.css';


export function Square(props) {
    return (
        <div className={s.square}>
            <a href="#">
                <svg className={s.img} style={props.style}></svg>
            </a>
        </div>
    );
}

export default Square;
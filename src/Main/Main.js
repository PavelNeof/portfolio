import React from "react";
import s from "./Main.module.css";
import sContainer from "./../Common/Styles/Container.module.css"

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi, bro</span>
                    <h1>I'm Pavel Neofitov</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default Main;

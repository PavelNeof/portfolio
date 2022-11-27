import React from "react";
import s from "./Main.module.css";
import sContainer from "./../Common/Styles/Container.module.css"
import Zoom from 'react-reveal/Zoom';
import cv from "../Common/CV/CV.txt";

function Main() {
    return (
        <div id={'main'} className={s.mainBlock}>
            <div className={sContainer.container}>
                <Zoom>
                <div className={s.text}>
                    <span>Hi, bro</span>
                    <h1>I'm Pavel Neofitov</h1>
                    <p>Frontend Developer</p>
                    <a href={cv} download="CV download">CV download</a>
                </div>
                <div className={s.photo}></div>
                </Zoom>
            </div>

        </div>
    );
}

export default Main;

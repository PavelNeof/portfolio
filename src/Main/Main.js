import React from "react";
import s from "./Main.module.css";
import Zoom from 'react-reveal/Zoom';
import cv from "../Common/CV/Neofitov Pavel Frontend Developer CV.pdf";

function Main() {
    return (
        <div id={'main'} className={s.mainBlock}>
            <div className={s.container}>
                <Zoom>
                    <div className={s.flexBlock}>
                        <div className={s.text}>
                            <div className={s.blockLeft}>
                                <div>
                                    <h1>I'm Pavel Neofitov</h1>
                                    <p>Frontend Developer</p>
                                </div>
                                <div className={s.button}>
                                    <a className={s.link} href={cv} download="Neofitov Pavel Frontend Developer CV">
                                        <div className={s.linkBox}> CV download</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={s.photo}></div>
                    </div>
                </Zoom>
            </div>

        </div>
    );
}

export default Main;

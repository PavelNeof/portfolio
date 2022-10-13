import React from "react";
import s from './Footer.module.css';
import sContainer from "../Common/Styles/Container.module.css";
import Square from "./Square/Square"
import github from "../assets/image/github.png";
import telegram from "../assets/image/telegram.png";
import vk from "../assets/image/vk.png";
import codewars from "../assets/image/codewars.png";


function Footer() {
    const Github = {
        backgroundImage: `url( ${github})`,
    };
    const Telegram = {
        backgroundImage: `url( ${telegram})`,
    };
    const Vk = {
        backgroundImage: `url( ${vk})`,
    };
    const Codewars = {
        backgroundImage: `url( ${codewars})`,
    };

    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.container}`}>
                <div className={s.flex}>
                <h2 className={s.h1}>Neofitov Pavel</h2>
                <div className={s.square}>
                <Square style={Github}/>
                <Square style={Telegram}/>
                <Square style={Vk}/>
                <Square style={Codewars}/>
                </div>
                    <div className={s.lastLine}>© All rights reserved</div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
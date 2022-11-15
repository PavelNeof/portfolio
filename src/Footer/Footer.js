import React from "react";
import s from './Footer.module.css';
import sContainer from "../Common/Styles/Container.module.css";
import Square from "./Square/Square"
import github from "../assets/image/github.png";
import telegram from "../assets/image/telegram.png";
import vk from "../assets/image/vk.png";
import codewars from "../assets/image/codewars.png";
import Zoom from 'react-reveal/Zoom';
import ReactTypingEffect from 'react-typing-effect';


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
            <footer className={`${sContainer.container} ${s.container}`}>
                <div className={s.flex}>
                    <Zoom>

                <h2 className={s.h1}>Neofitov Pavel</h2>

                    </Zoom>
                <Zoom>
                <div className={s.square}>
                <Square style={Github} href={'https://github.com/PavelNeof'}/>
                <Square style={Telegram}/>
                <Square style={Vk}/>
                <Square style={Codewars}/>
                </div>
                </Zoom>
                    <div className={s.lastLine}><ReactTypingEffect
                        text={'© All rights reserved'}
                    /></div>
                </div>

            </footer>
        </div>
    );
}

export default Footer;
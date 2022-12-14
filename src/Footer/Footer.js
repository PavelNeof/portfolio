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
                            <Square style={Telegram} href={'https://t.me/PavelllN'}/>
                            <Square style={Vk} href={'https://vk.com/satalaizer'}/>
                            <Square style={Codewars} href={'https://www.codewars.com/users/pavelneof'}/>
                        </div>
                    </Zoom>
                    <div className={s.lastLine}>
                        <Zoom>
                            <ReactTypingEffect
                                text={'© All rights reserved'}/>
                        </Zoom>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default Footer;
import React from "react";
import s from './Footer.module.css';
import sContainer from "../Common/Styles/Container.module.css";
import Square from "./Square/Square"

function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${sContainer.container} ${s.container}`}>
                <div className={s.flex}>
                <h2 className={s.h1}>Неофитов Павел</h2>
                <div className={s.square}>
                <Square/>
                <Square/>
                <Square/>
                <Square/>
                </div>
                    <div className={s.lastLine}>Все права защищены</div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
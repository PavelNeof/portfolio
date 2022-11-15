import React from "react";
import s from './Nav.module.css';

function Nav() {
    return (
        <nav className={s.nav}>
            <a className={s.linkUnderlineMenu} href={''}>Main</a>
            <a className={s.linkUnderlineMenu} href={''}>Skills</a>
            <a className={s.linkUnderlineMenu} href={''}>Works</a>
            <a className={s.linkUnderlineMenu} href={''}>Contact</a>

        </nav>
    );
}

export default Nav;

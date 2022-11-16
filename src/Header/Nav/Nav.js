import React from "react";
import s from './Nav.module.css';
import {Link, animateScroll as scroll} from "react-scroll";

function Nav() {
    return (
        <nav className={s.nav}>
            <Link className={s.linkUnderlineMenu} activeClass={s.active} to={'main'} spy={true} smooth={true}
                  offset={-70} duration={500}>Main</Link>
            <Link className={s.linkUnderlineMenu} activeClass={s.active} to={'skills'} spy={true} smooth={true}
                  offset={-70} duration={500}>Skills</Link>
            <Link className={s.linkUnderlineMenu} activeClass={s.active} to={'works'} spy={true} smooth={true}
                  offset={-70} duration={500}>Works</Link>
            <Link className={s.linkUnderlineMenu} activeClass={s.active} to={'contacts'} spy={true} smooth={true}
                  offset={-70} duration={500}>Contact</Link>

        </nav>
    );
}

export default Nav;

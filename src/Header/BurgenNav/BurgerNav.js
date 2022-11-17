import React, {useState} from "react";
import s from './BurgerNav.module.css';
import {Link, animateScroll as scroll} from "react-scroll";
import menu from "./../../assets/image/menu.png"

function BurgerNav() {

    const [isOpen, setIsOpen] = useState(false)

    const onBurgerButtonClick = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    const Menu = {
        backgroundImage: `url(${menu})`,
    };

    return (
        <nav className={s.burgerNav}>
            <div className={isOpen ? s.burgerNavItems : `${s.burgerNavItems} ${s.close}`}>
                <Link className={s.linkUnderlineMenu} activeClass={s.active} to={'main'} spy={true} smooth={true}
                      offset={-70} duration={500}>Main</Link>
                <Link className={s.linkUnderlineMenu} activeClass={s.active} to={'skills'} spy={true} smooth={true}
                      offset={-70} duration={500}>Skills</Link>
                <Link className={s.linkUnderlineMenu} activeClass={s.active} to={'works'} spy={true} smooth={true}
                      offset={-70} duration={500}>Projects</Link>
                <Link className={s.linkUnderlineMenu} activeClass={s.active} to={'contacts'} spy={true} smooth={true}
                      offset={-70} duration={500}>Contact</Link>
            </div>
            <div className={s.burgerNavButton} onClick={onBurgerButtonClick}>
                <svg className={s.img} style={Menu}></svg>
            </div>
        </nav>
    );
}

export default BurgerNav;

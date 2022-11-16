import React from "react";
import s from './Header.module.css';
import Nav from "./Nav/Nav";
import BurgerNav from "./BurgenNav/BurgerNav";

function Header() {
    return (
        <header className={s.header}>
            <Nav/>
            <BurgerNav/>
        </header>
    );
}

export default Header;

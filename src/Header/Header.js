import React from "react";
import s from './Header.module.css';
import Nav from "../Nav/Nav";

function Header() {
    return (
        <header className={s.header}>
            <Nav/>
        </header>
    );
}

export default Header;

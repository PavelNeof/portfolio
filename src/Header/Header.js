import React from "react";
import {useState} from "react";
import s from './Header.module.css';
import Nav from "./Nav/Nav";
import BurgerNav from "./BurgenNav/BurgerNav";
// import {useState} from "@types/react";


function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const onBurgerButtonClick = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }


    return (
        <header className={isOpen ? s.header : `${s.header} ${s.close}`}>
            {/*<div className={props.isOpen ? s.burgerNavItems : `${s.burgerNavItems} ${s.close}`}>*/}
            <Nav/>
            <BurgerNav isOpen={isOpen} onBurgerButtonClick={onBurgerButtonClick} setIsOpen={setIsOpen}/>
        </header>
    );
}

export default Header;
